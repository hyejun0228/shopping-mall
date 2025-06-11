import { useQuery } from '@tanstack/react-query';
import * as S from './BuyPage.styled';
import { useUserStore } from '../../hooks/stores/useUserStore';
import { fetchAddresses } from '../../api/address';
import Select from '../../components/common/Select';
import { useLocation, useNavigate } from 'react-router-dom';
import type { CartItem as CartItemType } from '../../api/cart/entity';
import { useState } from 'react';
import { createOrder } from '../../api/order';

function BuyPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { userId } = useUserStore((state) => state);
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const { data: addresses = [] } = useQuery({
    queryKey: ['addresses', userId],
    queryFn: () => fetchAddresses(Number(userId)),
    enabled: !!userId,
  });

  const mainAddress = addresses.find((data) => data.is_main_address === 1);
  const selectedProducts: CartItemType[] = state?.products ?? [];

  const totalPrice = selectedProducts.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleOrder = async () => {
    if (!mainAddress) return alert('배송지를 선택해주세요.');
    if (!selectedMethod) return alert('결제 수단을 선택해주세요.');
    if (selectedProducts.length === 0) return alert('선택된 상품이 없습니다.');

    try {
      await createOrder({
        user_id: Number(userId),
        total_price: totalPrice + 3000,
        recipient_name: mainAddress.name,
        recipient_phone: mainAddress.phone,
        postal_code: mainAddress.postal_code,
        address: mainAddress.address,
        detail_address: mainAddress.detail_address,
        payment_method: selectedMethod,
        items: selectedProducts.map((item) => ({
          product_id: item.product_id,
          quantity: item.quantity,
          price: item.price,
        })),
      });
      alert('주문이 완료되었습니다!');
      navigate('/');
    } catch (error) {
      console.error('주문 실패:', error);
      alert('주문에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <S.Container>
      <S.CartContainer>
        <S.Title>배송/결제</S.Title>

        <S.Box>
          <S.DescriptionTitle>배송 주소</S.DescriptionTitle>
          {mainAddress ? (
            <S.AddressCard>
              <S.Wrapper>
                <S.DeliveryTitle>받는분</S.DeliveryTitle>
                <S.CardText>{mainAddress.name}</S.CardText>
              </S.Wrapper>
              <S.Wrapper>
                <S.DeliveryTitle>연락처</S.DeliveryTitle>
                <S.CardText>{mainAddress.phone}</S.CardText>
              </S.Wrapper>
              <S.Wrapper style={{ marginBottom: '20px' }}>
                <S.DeliveryTitle style={{ marginRight: '12px' }}>주소</S.DeliveryTitle>
                <S.CardText>
                  [{mainAddress.postal_code}] {mainAddress.address} {mainAddress.detail_address}
                </S.CardText>
              </S.Wrapper>
            </S.AddressCard>
          ) : (
            <p>기본 배송지가 없습니다.</p>
          )}
          <Select name="example" placeholder="배송오기전 연락주세요">
            <Select.Slot value="FCFS">요청사항 없음</Select.Slot>
            <Select.Slot value="RR">문 앞에 놓아주세요</Select.Slot>
            <Select.Slot value="SPN">경비실에 맡겨 주세요</Select.Slot>
            <Select.Slot value="SRTN">파손 위험 상품입니다. 배송 시 주의해주세요</Select.Slot>
            <Select.Slot value="HRRN">배송오기전 연락주세요</Select.Slot>
          </Select>
        </S.Box>
        <S.Box>
          <S.DescriptionTitle>상품 목록</S.DescriptionTitle>
          {selectedProducts.map((item) => (
            <S.ProductCard key={item.id}>
              <S.ProductImage src={item.image_url} alt={item.name} />
              <S.ProductInfo>
                <S.ProductName>{item.name}</S.ProductName>
                <S.ProductDescription>{item.description}</S.ProductDescription>
                <S.ProductPrice>{(item.price * item.quantity).toLocaleString()}원</S.ProductPrice>
              </S.ProductInfo>
            </S.ProductCard>
          ))}
        </S.Box>
        <S.Box>
          <S.DescriptionTitle>결제 방법</S.DescriptionTitle>
          <S.Line />
          <S.PriceTitle>일반 결제</S.PriceTitle>
          <S.MethodButtonContainer>
            <S.MethodButton
              isSelected={selectedMethod === 'card'}
              onClick={() => setSelectedMethod('card')}
            >
              카드 결제
            </S.MethodButton>
            <S.MethodButton
              isSelected={selectedMethod === 'kakao'}
              onClick={() => setSelectedMethod('kakao')}
            >
              카카오페이
            </S.MethodButton>
            <S.MethodButton
              isSelected={selectedMethod === 'toss'}
              onClick={() => setSelectedMethod('toss')}
            >
              토스
            </S.MethodButton>
            <S.MethodButton
              isSelected={selectedMethod === 'bank'}
              onClick={() => setSelectedMethod('bank')}
            >
              무통장입금
            </S.MethodButton>
          </S.MethodButtonContainer>
        </S.Box>
        <S.Box>
          <S.DescriptionTitle>최종 주문 정보</S.DescriptionTitle>
          <S.Line />
          <S.PriceWrapper>
            <S.PriceTitle>총 상품금액</S.PriceTitle>
            <S.Price>{totalPrice.toLocaleString()}원</S.Price>
          </S.PriceWrapper>
          <S.PriceWrapper>
            <S.PriceTitle>총 배송비</S.PriceTitle>
            <S.Price>3,000원</S.Price>
          </S.PriceWrapper>
          <S.PriceWrapper style={{ marginTop: '12px' }}>
            <S.PriceTitle>
              <strong>총 결제 금액</strong>
            </S.PriceTitle>
            <S.Price>
              <strong>{(totalPrice + 3000).toLocaleString()}원</strong>
            </S.Price>
          </S.PriceWrapper>
        </S.Box>
        <S.BuyButton type="button" onClick={handleOrder}>
          구매하기
        </S.BuyButton>
      </S.CartContainer>
    </S.Container>
  );
}

export default BuyPage;
