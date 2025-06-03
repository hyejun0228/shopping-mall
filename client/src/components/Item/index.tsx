import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import * as S from './Item.styled';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

function Item() {
  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await axios.get<Product[]>('http://localhost/get_products.php');
      return res.data;
    },
  });

  return (
    <S.ProductGrid>
      {isLoading && <p>로딩 중...</p>}
      {error && <p>상품을 불러오는 데 실패했습니다.</p>}
      {products.map(({ id, name, price }) => (
        <>
          <S.ProductCard key={id}>
            <S.ProductItemWrapper>이미지</S.ProductItemWrapper>
            {/* <img src={product.image} alt={product.name} /> */}
            <S.ItemDescription>
              <S.ProductTitle>{name}</S.ProductTitle>
              <S.ProductPrice>{Number(price).toFixed(0)}원</S.ProductPrice>
            </S.ItemDescription>
          </S.ProductCard>
        </>
      ))}
    </S.ProductGrid>
  );
}

export default Item;
