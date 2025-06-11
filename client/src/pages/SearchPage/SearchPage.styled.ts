import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
`;

export const SearchBar = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px;
`;

export const Button = styled.button`
  padding: 8px 16px;
`;

export const ResultsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const ProductCard = styled.div`
  width: 200px;
  border: 1px solid #ccc;
  padding: 12px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

export const ProductInfo = styled.div`
  margin-top: 8px;
`;

export const ProductName = styled.h3`
  font-size: 16px;
  margin: 0;
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  color: #666;
`;

export const ProductPrice = styled.div`
  font-weight: bold;
  margin-top: 8px;
`;
