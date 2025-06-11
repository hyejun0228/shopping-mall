import * as S from './CartItem.styled';
import { removeFromCart } from '../../../api/cart';
import { useCallback } from 'react';
import CloseIcon from '@/assets/svg/close.svg?react';
import { useUserStore } from '../../../hooks/stores/useUserStore';
import { useQueryClient } from '@tanstack/react-query';

interface Props {
  product: {
    id: number;
    product_id: number;
    quantity: number;
    name: string;
    brand: string;
    description: string;
    price: number;
    image_url: string;
  };
  onRemove: (productId: number) => void;
  checked: boolean;
  onCheck: () => void;
}

function CartItem({ product, onRemove, checked, onCheck }: Props) {
  const queryClient = useQueryClient();
  const { userId } = useUserStore((state) => state);

  const handleRemove = useCallback(async () => {
    try {
      await removeFromCart(Number(userId), product.product_id);
      queryClient.invalidateQueries({ queryKey: ['cart', userId] });
      onRemove(product.product_id);
    } catch (err) {
      console.error('장바구니 삭제 실패:', err);
    }
  }, [userId, product.product_id, onRemove, queryClient]);

  return (
    <S.ItemWrapper>
      <S.InputWrapper>
        <S.HeaderWrapper>
          <S.ItemCheckbox type="checkbox" checked={checked} onChange={onCheck} />
          <S.DeleteButton onClick={handleRemove} type="button">
            <CloseIcon />
          </S.DeleteButton>
        </S.HeaderWrapper>
      </S.InputWrapper>
      <S.InfoWrapper>
        <S.Image src={product.image_url} alt={product.name} />
        <S.Info>
          <S.Brand>{product.brand}</S.Brand>
          <S.Name>{product.name}</S.Name>
          <S.Description>{product.description}</S.Description>
        </S.Info>
      </S.InfoWrapper>
      <S.PriceWrapper>
        <S.Wrapper>
          <S.PriceTitle>상품금액</S.PriceTitle>
          <S.Price>{(product.price * product.quantity).toLocaleString()}원</S.Price>
        </S.Wrapper>
        <S.Wrapper>
          <S.PriceTitle>배송비</S.PriceTitle>
          <S.Price>3,000원</S.Price>
        </S.Wrapper>
      </S.PriceWrapper>
    </S.ItemWrapper>
  );
}

export default CartItem;
