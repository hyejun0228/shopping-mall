import { useState } from 'react';
import Item from '../Item';
import * as S from './ItemCategory.styled';

const CATEGORY_LIST = [
  { id: 1, name: 'Shoes' },
  { id: 2, name: 'Tops' },
  { id: 3, name: 'Bottoms' },
  { id: 4, name: 'Bags' },
  { id: 5, name: 'Accessories' },
];

function ItemCategory() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY_LIST[0]);

  return (
    <S.Container>
      <S.CategoryWrapper>
        {CATEGORY_LIST.map((category) => (
          <S.CategoryItem
            key={category.id}
            onClick={() => setSelectedCategory(category)}
            style={{
              fontWeight: category.id === selectedCategory.id ? 'bold' : 'normal',
            }}
          >
            {category.name}
          </S.CategoryItem>
        ))}
      </S.CategoryWrapper>
      <Item category={selectedCategory} />
    </S.Container>
  );
}

export default ItemCategory;
