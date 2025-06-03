import * as S from './OrderHistoryPage.styled';

const MOCK_DATA = [
  {
    orderId: 'O-OR12345678',
    paymentDate: '2023.10.01',
    productName: 'New Balance 574 Grey',
    size: '260',
    deliveryStatus: '배송준비중',
    paymentAmount: '100,000원',
    paymentMethod: '신용카드',
    deliveryAddress: '서울시 강남구 테헤란로 123',
    deliveryRequest: '빠른 배송 부탁드립니다.',
    deliveryPrice: '3,000원',
    imageUrl: 'https://example.com/image1.jpg',
  },
  {
    orderId: 'O-OR12345679',
    paymentDate: '2023.10.02',
    productName: 'Nike Air Max 270',
    size: '270',
    deliveryStatus: '배송중',
    paymentAmount: '120,000원',
    paymentMethod: '무통장입금',
    deliveryAddress: '서울시 강서구 공항대로 456',
    deliveryRequest: '문 앞에 놓아주세요.',
    deliveryPrice: '3,000원',
    imageUrl: 'https://example.com/image2.jpg',
  },
  {
    orderId: 'O-OR12345680',
    paymentDate: '2023.10.03',
    productName: 'Adidas Ultraboost 21',
    size: '250',
    deliveryStatus: '배송완료',
    paymentAmount: '150,000원',
    paymentMethod: '카카오페이',
    deliveryAddress: '서울시 송파구 올림픽로 789',
    deliveryRequest: '택배함에 넣어주세요.',
    deliveryPrice: '3,000원',
    imageUrl: 'https://example.com/image3.jpg',
  },
  {
    orderId: 'O-OR12345681',
    paymentDate: '2023.10.04',
    productName: 'Puma RS-X Reinvent',
    size: '280',
    deliveryStatus: '배송준비중',
    paymentAmount: '110,000원',
    paymentMethod: '신용카드',
    deliveryAddress: '서울시 마포구 월드컵북로 101',
    deliveryRequest: '직접 수령 예정입니다.',
    deliveryPrice: '3,000원',
    imageUrl: 'https://example.com/image4.jpg',
  },
  {
    orderId: 'O-OR12345682',
    paymentDate: '2023.10.05',
    productName: 'Asics Gel-Kayano 27',
    size: '265',
    deliveryStatus: '배송중',
    paymentAmount: '130,000원',
    paymentMethod: '신용카드',
    deliveryAddress: '서울시 강북구 도봉로 234',
    deliveryRequest: '배송 시간은 오후 2시 이후로 부탁드립니다.',
    deliveryPrice: '3,000원',
    imageUrl: 'https://example.com/image5.jpg',
  },
];

export default function OrderHistoryPage() {
  return (
    <S.Container>
      <S.Title>구매 내역</S.Title>
      <S.ItemListWrapper>
        {MOCK_DATA.map((order) => (
          <S.Item key={order.orderId}>
            <S.ItemHeader>
              <div>결제번호: {order.orderId}</div>
              <span>결제일: {order.paymentDate}</span>
            </S.ItemHeader>
            <S.ItemBody>
              <S.ImageWrapper>
                {/* <img src={order.imageUrl} alt={order.productName} /> */}
              </S.ImageWrapper>
              <S.DescriptionWrapper>
                <div>{order.productName}</div>
                <div>사이즈: {order.size}</div>
                {/* <div>배송 상태: {order.deliveryStatus}</div>
                <div>결제 금액: {order.paymentAmount}</div>
                <div>결제 방법: {order.paymentMethod}</div>
                <div>배송 주소: {order.deliveryAddress}</div>
                <div>배송 요청 사항: {order.deliveryRequest}</div> */}
              </S.DescriptionWrapper>
              <S.Result>결제 완료</S.Result>
            </S.ItemBody>
          </S.Item>
        ))}
      </S.ItemListWrapper>
    </S.Container>
  );
}
