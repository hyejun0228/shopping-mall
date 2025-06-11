import * as S from './WishListPage.styled';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useUserStore } from '../../../hooks/stores/useUserStore';

interface WishItem {
  id: number;
  productName: string;
  size?: string;
  price: string;
  imageUrl: string;
  bookmarked: boolean;
  name: string;
  brand?: string;
  image_url: string;
  // 필요에 따라 필드 추가
}

function WishListPage() {
  const userId = useUserStore((state) => state.userId);
  const [wishList, setWishList] = useState<WishItem[]>([]);

  useEffect(() => {
    if (!userId) return;

    const fetchBookmarkedProducts = async () => {
      try {
        // 모든 카테고리 상품을 가져오는 API 호출 (category_id=0 또는 생략 가능하게 서버 수정 필요)
        const res = await axios.get(
          `http://localhost/server/product/get_products.php?user_id=${userId}&category_id=0`
        );
        // bookmarked가 true인 상품만 필터링
        const bookmarkedProducts = res.data.filter((p: WishItem) => p.bookmarked);
        setWishList(bookmarkedProducts);
      } catch (error) {
        console.error('관심 상품 불러오기 실패', error);
      }
    };

    fetchBookmarkedProducts();
  }, [userId]);

  return (
    <S.Container>
      <S.Title>관심 상품</S.Title>
      <S.ItemWishWrapper>
        {wishList.length === 0 && <div>북마크한 상품이 없습니다.</div>}
        {wishList.map((item) => (
          <S.Item key={item.id}>
            <S.Wrapper>
              <S.ImageWrapper>
                <img src={item.image_url} alt={item.name} />
              </S.ImageWrapper>
              <S.bodyWrapper>
                <S.title>{item.brand ?? 'Unknown Brand'}</S.title>
                <S.title>{item.name}</S.title>
                {item.size && <S.size>SIZE : {item.size}</S.size>}
              </S.bodyWrapper>
            </S.Wrapper>
            <S.price>
              <div>구매가</div>
              <strong>{Number(item.price).toFixed(0)}원</strong>
            </S.price>
          </S.Item>
        ))}
      </S.ItemWishWrapper>
    </S.Container>
  );
}

export default WishListPage;
