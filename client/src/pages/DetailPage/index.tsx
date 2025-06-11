import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './DetailPage.styled';
import useMediaQuery from '../../hooks/utils/useMediaQuery';
import sizeImage from './../../assets/size-image.png';
interface ProductDetail {
  id: number;
  name: string;
  price: string;
  image_url: string;
  brand: string;
  description?: string;
}

function DetailPage() {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 화면 너비 768px 이하일 때 true
  const isMobile = useMediaQuery({ maxWidth: 860 });

  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `http://localhost/server/product/get_product_detail.php?product_id=${productId}`,
          { withCredentials: true }
        );
        setProduct(res.data);
        setError(null);
      } catch {
        setError('상품을 불러오는 데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>상품이 없습니다.</p>;

  return (
    <S.Container>
      <S.Body isMobile={isMobile}>
        <S.ImageWrapper isMobile={isMobile}>
          <img src={product.image_url} alt={product.name} />
        </S.ImageWrapper>
        <S.DescriptionWrapper isMobile={isMobile}>
          <S.ItemDescription>
            <div>
              <S.ItemTitle>{product.name}</S.ItemTitle>
              {product.description && (
                <S.DescriptionTitle>{product.description}</S.DescriptionTitle>
              )}
              <S.ItemPrice>{Number(product.price).toLocaleString()}원</S.ItemPrice>
            </div>
            <S.ButtonWrapper>
              <S.Button>장바구니에 담기</S.Button>
              <S.Button>구매하기</S.Button>
            </S.ButtonWrapper>
          </S.ItemDescription>
        </S.DescriptionWrapper>
      </S.Body>
      <S.DetailBodyWrapper>
        <S.SizeWrapper>
          <img src={sizeImage} alt={product.name} />
        </S.SizeWrapper>
      </S.DetailBodyWrapper>
    </S.Container>
  );
}

export default DetailPage;
