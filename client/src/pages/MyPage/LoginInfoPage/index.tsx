import { useEffect, useState } from 'react';
import * as S from './LoginInfoPage.styled';
import type { Order, OrderItem } from '../../../api/order/entity';
import { useUserStore } from '../../../hooks/stores/useUserStore';
import { fetchOrders } from '../../../api/order';

interface User {
  id: number;
  email: string;
  name: string;
}

function LoginInfoPage() {
  const { userId } = useUserStore((state) => state);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await fetch('http://localhost/server/router.php?action=me', {
          method: 'GET',
          credentials: 'include',
        });

        if (!res.ok) throw new Error();

        const data = await res.json();
        setUser(data);
      } catch {
        alert('로그인된 사용자만 접근할 수 있습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const data = await fetchOrders(Number(userId));
        setOrders(data);
        console.log('주문 내역 불러오기 성공:', data);
      } catch (error) {
        console.error('주문 내역 불러오기 실패:', error);
      }
    };

    if (userId) getOrders();
  }, [userId]);

  if (loading) return <p>불러오는 중...</p>;
  if (!user) return <p>유저 정보를 불러올 수 없습니다.</p>;

  return (
    <S.Container>
      <S.Title>로그인 정보</S.Title>
      <S.ItemListWrapper>
        <S.InfoWrapper>
          <S.InfoImageWrapper>
            {/* <img src="https://via.placeholder.com/80" alt="User Avatar" /> */}
          </S.InfoImageWrapper>
          <S.InfoItemWrapper>
            <S.InfoName>{user.name}</S.InfoName>
            <S.InfoEmail>{user.email}</S.InfoEmail>
          </S.InfoItemWrapper>
        </S.InfoWrapper>
      </S.ItemListWrapper>
      <S.Title>구매 내역</S.Title>
      <S.ItemListWrapper>
        {orders &&
          orders.map((order) => (
            <S.Item key={order.id}>
              <S.ItemHeader>
                <div>결제번호: O-OR{order.id.toString().padStart(8, '0')}</div>
                <span>결제일: {order.created_at.split(' ')[0]}</span>
              </S.ItemHeader>

              {order.items?.map((item: OrderItem) => (
                <S.ItemBody key={item.id}>
                  <S.ImageWrapper>
                    <img src={item.image_url} alt={item.name} />
                  </S.ImageWrapper>
                  <S.DescriptionWrapper>
                    <div>{item.name}</div>
                    <div>수량: {item.quantity}</div>
                    <div>가격: {(item.price * item.quantity).toLocaleString()}원</div>
                  </S.DescriptionWrapper>
                  <S.Result>결제 완료</S.Result>
                </S.ItemBody>
              ))}
            </S.Item>
          ))}
      </S.ItemListWrapper>
    </S.Container>
  );
}

export default LoginInfoPage;
