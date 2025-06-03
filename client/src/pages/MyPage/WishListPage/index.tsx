import * as S from './WishListPage.styled';

const MOCK_DATA = [
  {
    id: 1,
    productName: 'New Balance 574 Grey',
    size: '260',
    price: '100,000원',
    imageUrl: 'https://example.com/image1.jpg',
  },
  {
    id: 2,
    productName: 'Nike Air Max 270',
    size: '270',
    price: '120,000원',
    imageUrl: 'https://example.com/image2.jpg',
  },
  {
    id: 3,
    productName: 'Adidas Ultraboost 21',
    size: '250',
    price: '150,000원',
    imageUrl: 'https://example.com/image3.jpg',
  },
];

function WishListPage() {
  return (
    <S.Container>
      <S.Title>관심 상품</S.Title>
      <S.ItemWishWrapper>
        {MOCK_DATA.map((item) => (
          <S.Item key={item.id}>
            <S.Wrapper>
              <S.ImageWrapper>
                {/* <img src={item.imageUrl} alt={item.productName} /> */}
              </S.ImageWrapper>
              <S.bodyWrapper>
                <S.title>{item.productName}</S.title>
                <S.size>SIZE : {item.size}</S.size>
              </S.bodyWrapper>
            </S.Wrapper>
            <S.price>
              <div>구매가</div>
              <strong>{item.price}</strong>
            </S.price>
          </S.Item>
        ))}
      </S.ItemWishWrapper>
    </S.Container>
  );
}

export default WishListPage;
