import { useState } from 'react';
import Item from '../Item';
import * as S from './ItemCategory.styled';

const CATEGORY_LIST = [
  { id: 1, name: 'Shoes' }, // 신발
  { id: 2, name: 'Tops' }, // 상의
  { id: 3, name: 'Bottoms' }, // 하의
  { id: 4, name: 'Bags' }, // 가방
  { id: 5, name: 'Accessories' }, // 액세서리
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
