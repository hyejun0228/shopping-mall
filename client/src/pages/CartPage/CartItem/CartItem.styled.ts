import styled from 'styled-components';
import typo from '../../../styles/typo';

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  gap: 16px;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: center;
`;

export const Info = styled.div`
  width: 100%;
`;

export const Brand = styled.p`
  ${typo['body-4-b']}
  color: #4E4E4E;
`;

export const Name = styled.p`
  ${typo['body-2-r']}
  color: #021730;
`;

export const Description = styled.p`
  ${typo['body-4-r']}
  color: #A7A7A7;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PriceTitle = styled.p`
  ${typo['body-4-r']}
  color: #021730;
`;

export const Price = styled.p`
  ${typo['body-4-b']}
  color: #021730;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const DeleteButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  margin-bottom: 44px;
  z-index: 10;
  width: 24px;
  height: 24px;
`;
