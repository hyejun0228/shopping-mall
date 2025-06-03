import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import * as S from './Item.styled';
import BookMarkIcon from '@/assets/svg/book-mark.svg?react';
import { useUserStore } from '../../stores/useUserStore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: string;
  brand: string;
  image_url: string;
  bookmarked: boolean;
}

function Item({ category }: { category: { id: number; name: string } }) {
  const navigate = useNavigate();
  const userId = useUserStore((state) => state.userId);
  const { data: products = [], refetch } = useQuery<Product[]>({
    queryKey: ['products', category.name, userId],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost/server/product/get_products.php?category_id=${category.id}&user_id=${userId}`
      );
      return res.data;
    },
    enabled: !!category?.name && !!userId,
  });

  // 낙관적 UI 반영 위한 상태
  const [bookmarkState, setBookmarkState] = useState<Record<number, boolean>>({});

  const handleToggleBookmark = async (productId: number) => {
    const prev =
      bookmarkState[productId] ?? products.find((p) => p.id === productId)?.bookmarked ?? false;
    const optimistic = !prev;

    // 낙관적 UI 업데이트
    setBookmarkState((prevState) => ({
      ...prevState,
      [productId]: optimistic,
    }));

    try {
      await axios.post(
        'http://localhost/server/bookmark/toggle_bookmark.php',
        {
          user_id: userId,
          product_id: productId,
        },
        { withCredentials: true }
      );

      // 성공 시 최신 데이터 재요청 (또는 fetchBookmarks 함수 호출)
      refetch();
    } catch (err) {
      // 실패 시 롤백
      setBookmarkState((prevState) => ({
        ...prevState,
        [productId]: prev,
      }));
      alert('북마크 처리 실패');
    }
  };

  const isBookmarked = (product: Product) =>
    bookmarkState[product.id] !== undefined ? bookmarkState[product.id] : product.bookmarked;

  return (
    <S.ProductGrid>
      {products.map(({ id, image_url, name, brand, price, bookmarked }) => (
        <S.ProductCard key={id} onClick={() => navigate(`/detail/${id}`)}>
          <S.ProductItemWrapper>
            <img src={image_url} alt={name} />
            <S.BookMark
              onClick={() => handleToggleBookmark(id)}
              $active={isBookmarked({ id, image_url, name, brand, price, bookmarked })}
            >
              <BookMarkIcon />
            </S.BookMark>
          </S.ProductItemWrapper>
          <S.ItemDescription>
            <S.ProductTitle>{brand ?? 'Unknown Brand'}</S.ProductTitle>
            <S.ProductTitle>{name}</S.ProductTitle>
            <S.ProductPrice>{Number(price).toFixed(0)}원</S.ProductPrice>
          </S.ItemDescription>
        </S.ProductCard>
      ))}
    </S.ProductGrid>
  );
}

export default Item;
