import styled from 'styled-components';
import typo from '../../styles/typo';

export const ProductGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
  margin-top: 40px;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  gap: 12px;
`;

export const ProductItemWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BookMark = styled.div<{ $active: boolean }>`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    fill: ${({ $active }) => ($active ? '#021730' : '#fafafa')};
    transition: fill 0.2s ease;

    &:hover {
      fill: #021730;
    }
  }
`;


export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;
  width: 100%;
  padding-left: 8px;
`;

export const ProductTitle = styled.h4`
  display: flex;
  align-items: start;
  ${typo['body-1-sb']}
`;

export const ProductPrice = styled.p`
  ${typo['body-3-m']}
  color: #333;
`;