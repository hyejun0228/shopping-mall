import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as S from './DetailPage.styled';
import useMediaQuery from '../../hooks/utils/useMediaQuery';
import sizeImage from './../../assets/size-image.png';
import { fetchProductDetail } from '../../api/product';
import { addToCart } from '../../api/cart';
import { useUserStore } from '../../hooks/stores/useUserStore';
import type { ProductDetail } from '../../api/product/entity';
import LoginPromptModal from '../../components/LoginPromptModal';

function DetailPage() {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isMobile = useMediaQuery({ maxWidth: 860 });
  const { userId } = useUserStore((state) => state);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!productId) return;

    const fetch = async () => {
      try {
        setLoading(true);
        const data = await fetchProductDetail(productId);
        setProduct(data);
        setError(null);
      } catch {
        setError('상품을 불러오는 데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [productId]);

  const handleAddToCart = async () => {
    if (!userId) {
      setShowModal(true);
      return;
    }
    if (!userId || !product) {
      alert('로그인이 필요하거나 상품 정보가 없습니다.');
      return;
    }

    try {
      await addToCart(Number(userId), product.id);
      alert('장바구니에 추가되었습니다!');
    } catch (err) {
      console.error(err);
      alert('장바구니 추가 실패');
    }
  };

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
            <S.ButtonWrapper isMobile={isMobile}>
              <S.Button onClick={handleAddToCart}>장바구니에 담기</S.Button>
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
      {showModal && <LoginPromptModal onClose={() => setShowModal(false)} />}
    </S.Container>
  );
}

export default DetailPage;
