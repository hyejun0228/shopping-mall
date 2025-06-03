import styled from 'styled-components';
import typo from '../../styles/typo';

export const ProductGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
  margin-top: 40px;
  width: calc(100% - 120px);
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
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F4F6F9;
  border-radius: 12px;
  height: 200px;
  width: 100%;
`;

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  padding-left: 8px;
`;

export const ProductTitle = styled.h4`
  ${typo['body-1-sb']}
`;

export const ProductPrice = styled.p`
  ${typo['body-3-m']}
  color: #333;
`;