import styled from 'styled-components';
import typo from '../../styles/typo';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
  background-color: #f9f9f9;
  min-height: calc(100vh - 160px);
  margin-bottom: 80px;
`;

export const Title = styled.h1`
  ${typo['subtitle-2-b']}
  margin: 20px 0;
  color: #021730;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 720px;
  width: 100%;
  align-items: center;
  gap: 8px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
`;

export const DescriptionTitle = styled.p`
  ${typo['body-3-b']}
  color: #021730;
  margin-bottom: 8px;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #F4F6F9;
  margin: 12px 0;
`;

export const AddressCard = styled.div`
  display: flex;
  flex-direction: column;
  ${typo['body-4-b']};
  border-radius: 8px;
  width: 100%;
  gap: 4px;
`;

export const DeliveryTitle = styled.p`
  ${typo['body-4-r']};
  color: #4E4E4E;
`;

export const CardText = styled.p`
  ${typo['body-4-r']};
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
`;

export const ProductCard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 16px;
  border-radius: 8px;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.div`
  ${typo['body-2-b']}
`;

export const ProductDescription = styled.div`
  ${typo['body-4-r']}
  color: #666;
`;

export const ProductBrand = styled.div`
  ${typo['body-4-r']}
  font-size: 14px;
  color: #666;
`;

export const ProductPrice = styled.div`
  ${typo['body-4-r']}
  color: #333;
`;

export const PriceWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const PriceTitle = styled.p`
  ${typo['body-4-r']}
  color: #021730;

  & > strong {
    ${typo['body-3-b']}
  }
`;

export const Price = styled.p`
  ${typo['body-4-b']}
  color: #021730;

  & > strong {
    ${typo['body-3-b']}
  }
`;

export const PayContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
`;

export const PayButton = styled.button`
  ${typo['body-2-sb']};
  width: 100%;
  padding: 12px;
  background-color: #021730;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #020f1e;
  }
`;

export const MethodButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`;

export const MethodButton = styled.button<{ isSelected: boolean }>`
  padding: 10px 16px;
  border: 1px solid ${({ isSelected }) => (isSelected ? '#021730' : '#ccc')};
  background-color: ${({ isSelected }) => (isSelected ? '#021730' : '#fff')};
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#333')};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #021730;
  }
`;

export const BuyButton = styled.button`
  ${typo['body-2-sb']};
  width: 100%;
  height: 48px;
  background-color: #021730;
  color: #fff;
  border: none;
  border-radius: 8px;

  cursor: pointer;
  margin-top: 16px;
  &:hover {
    background-color: #020f1d;
  }
  &:active {
    background-color: #020f1d;
  }
`;
