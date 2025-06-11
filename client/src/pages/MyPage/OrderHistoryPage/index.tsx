import * as S from './OrderHistoryPage.styled';
import { useEffect, useState } from 'react';
import { useUserStore } from '../../../hooks/stores/useUserStore';
import { fetchOrders } from '../../../api/order';
import type { Order, OrderItem } from '../../../api/order/entity';
import useMediaQuery from '../../../hooks/utils/useMediaQuery';

export default function OrderHistoryPage() {
  const { userId } = useUserStore((state) => state);
  const [orders, setOrders] = useState<Order[]>([]);
  const isMobile = useMediaQuery({ maxWidth: 860 });

  useEffect(() => {
    const getOrders = async () => {
      try {
        const data = await fetchOrders(Number(userId));
        setOrders(data);
      } catch (error) {
        console.error('주문 내역 불러오기 실패:', error);
      }
    };

    if (userId) getOrders();
  }, [userId]);

  return (
    <S.Container isMobile={isMobile}>
      <S.Title isMobile={isMobile}>구매 내역</S.Title>
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
