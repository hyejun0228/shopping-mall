import { useState } from 'react';
import Item from '../Item';
import * as S from './ItemCategory.styled';
import { useUserStore } from '../../hooks/stores/useUserStore';
import LoginPromptModal from '../LoginPromptModal';

const CATEGORY_LIST = [
  { id: 1, name: 'Shoes' },
  { id: 2, name: 'Tops' },
  { id: 3, name: 'Bottoms' },
  { id: 4, name: 'Bags' },
  { id: 5, name: 'Accessories' },
];

function ItemCategory() {
  const userId = useUserStore((state) => state.userId);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY_LIST[0]);

  const handleCategoryChange = (category: { id: number; name: string }) => {
    if (!userId) {
      setShowModal(true);
      return;
    }
    setSelectedCategory(category);
  };

  return (
    <S.Container>
      <S.CategoryWrapper>
        {CATEGORY_LIST.map((category) => (
          <S.CategoryItem
            key={category.id}
            onClick={() => handleCategoryChange(category)}
            style={{
              fontWeight: category.id === selectedCategory.id ? 'bold' : 'normal',
            }}
          >
            {category.name}
          </S.CategoryItem>
        ))}
      </S.CategoryWrapper>
      <Item category={selectedCategory} />
      {showModal && <LoginPromptModal onClose={() => setShowModal(false)} />}
    </S.Container>
  );
}

export default ItemCategory;
