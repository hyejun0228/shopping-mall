import { useQuery } from '@tanstack/react-query';
import * as S from './Item.styled';
import BookMarkIcon from '@/assets/svg/book-mark.svg?react';
import { useUserStore } from '../../hooks/stores/useUserStore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchProducts, toggleBookmark } from '../../api/product';
import type { Product } from '../../api/product/entity';
import LoginPromptModal from '../LoginPromptModal';

interface ItemProps {
  category: { id: number; name: string };
}

function Item({ category }: ItemProps) {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const userId = useUserStore((state) => state.userId);
  const [bookmarkState, setBookmarkState] = useState<Record<number, boolean>>({});

  const { data: products = [], refetch } = useQuery<Product[]>({
    queryKey: ['products', category.name, userId ?? 0],
    queryFn: () => fetchProducts(category.id, Number(userId ?? 0)),
    enabled: !!category?.name,
  });

  const handleToggleBookmark = async (productId: number) => {
    if (!userId) {
      setShowModal(true);
      return;
    }

    const prev =
      bookmarkState[productId] ?? products.find((p) => p.id === productId)?.bookmarked ?? false;
    const optimistic = !prev;

    setBookmarkState((prevState) => ({
      ...prevState,
      [productId]: optimistic,
    }));

    try {
      await toggleBookmark(Number(userId), productId);
      refetch();
    } catch {
      setBookmarkState((prevState) => ({
        ...prevState,
        [productId]: prev,
      }));
      alert('북마크 처리 실패');
    }
  };

  const isBookmarked = (product: Product) =>
    bookmarkState[product.id] !== undefined ? bookmarkState[product.id] : product.bookmarked;

  console.log('Item component rendered with products:', products);

  return (
    <S.ProductGrid>
      {products.map(({ id, image_url, name, brand, price, bookmarked }) => (
        <S.ProductCard key={id} onClick={() => navigate(`/detail/${id}`)}>
          <S.ProductItemWrapper>
            <S.ProductImage src={image_url} alt={name} />
            <S.BookMark
              onClick={(e) => {
                e.stopPropagation();
                handleToggleBookmark(id);
              }}
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
      {showModal && <LoginPromptModal onClose={() => setShowModal(false)} />}
    </S.ProductGrid>
  );
}

export default Item;
