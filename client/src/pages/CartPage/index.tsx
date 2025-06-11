import { useQuery } from '@tanstack/react-query';
import CartItem from './CartItem';
import * as S from './CartPage.styled';
import { fetchCart } from '../../api/cart';
import { useUserStore } from '../../hooks/stores/useUserStore';
import type { CartItem as CartItemType } from '../../api/cart/entity';
import { useEffect, useState } from 'react';

function CartPage() {
  const { userId } = useUserStore((state) => state);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const { data, isLoading } = useQuery<CartItemType[]>({
    queryKey: ['cart', userId],
    queryFn: () => fetchCart(Number(userId)),
    enabled: !!userId,
  });

  useEffect(() => {
    if (data) {
      setCartItems(data);
    }
  }, [data]);

  const handleRemove = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <S.Container>
      <S.CartContainer>
        <S.Title>장바구니</S.Title>

        <S.Box>
          <S.DescriptionWrapper>
            <S.Description>비보라 카드</S.Description>
            <S.Message>최대 15만원 상당 혜택</S.Message>
          </S.DescriptionWrapper>
          <S.DescriptionWrapper>
            <S.Description>현대 카드</S.Description>
            <S.Message style={{ marginLeft: '12px' }}>최대 15만원 상당 혜택</S.Message>
          </S.DescriptionWrapper>
        </S.Box>

        {isLoading ? (
          <p>불러오는 중...</p>
        ) : cartItems.length === 0 ? (
          <p>장바구니가 비어있습니다.</p>
        ) : (
          cartItems.map((item) => <CartItem key={item.id} product={item} onRemove={handleRemove} />)
        )}
      </S.CartContainer>
    </S.Container>
  );
}

export default CartPage;
