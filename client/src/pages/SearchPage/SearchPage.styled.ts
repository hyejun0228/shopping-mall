import styled from 'styled-components';
import typo from '../../styles/typo';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 160px);
  padding: 20px;
  background-color: #fff;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  height: 100%;
  width: 100%;
`;

export const SearchBar = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  min-width: 100%;
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #fff;

  &:hover {
    background-color: #ccc;
  }
`;

export const ResultsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
  margin-top: 12px;
`;

export const ProductCard = styled.button`
  display: flex;
  flex-direction: column;
  background: #fff;
  overflow: hidden;
  text-align: center;
  gap: 8px;
  border: none;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const ProductItemWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 212px;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 12px;
`;

export const ProductInfo = styled.div`
  margin-top: 8px;
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
  display: block;
  width: 220px;
  ${typo['body-2-sb']}
  color: #021730;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductPrice = styled.p`
  ${typo['body-3-sb']}
  color: #021730;
`;
