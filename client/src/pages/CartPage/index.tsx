import { useQuery } from '@tanstack/react-query';
import CartItem from './CartItem';
import * as S from './CartPage.styled';
import { fetchCart } from '../../api/cart';
import { useUserStore } from '../../hooks/stores/useUserStore';
import type { CartItem as CartItemType } from '../../api/cart/entity';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const navigate = useNavigate();
  const { userId } = useUserStore((state) => state);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

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

  const selectedItems = cartItems.filter((item) => selectedIds.includes(item.id));
  const allPrice = selectedItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const goToBuyPage = () => {
    const selectedProducts = cartItems.filter((item) => selectedIds.includes(item.id));
    navigate('/buy', { state: { products: selectedProducts } });
  };

  const handleCheck = (productId: number) => {
    setSelectedIds((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
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
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              product={item}
              onRemove={handleRemove}
              checked={selectedIds.includes(item.id)}
              onCheck={() => handleCheck(item.id)}
            />
          ))
        )}
        <S.Box>
          <S.PriceTitle>주문정보</S.PriceTitle>
          <S.Line />
          <S.PriceBox>
            <S.PriceWrapper>
              <S.PriceDescription>총 상품 금액</S.PriceDescription>
              <S.Price>{allPrice.toLocaleString()}원</S.Price>
            </S.PriceWrapper>
            <S.PriceWrapper>
              <S.PriceDescription>총 배송비</S.PriceDescription>
              <S.Price>3,000원</S.Price>
            </S.PriceWrapper>
          </S.PriceBox>
          <S.Line />
          <S.PriceWrapper>
            <S.PriceDescription>총 예상 결제금액</S.PriceDescription>
            <S.Price>
              <strong>{(allPrice + 3000).toLocaleString()}원</strong>
            </S.Price>
          </S.PriceWrapper>
        </S.Box>
        <S.BuyButton onClick={goToBuyPage} type="button">
          구매하기
        </S.BuyButton>
      </S.CartContainer>
    </S.Container>
  );
}

export default CartPage;
