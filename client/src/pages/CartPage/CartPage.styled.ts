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

export const DescriptionWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Description = styled.p`
  ${typo['body-4-r']}
  color: #4E4E4E;
`;

export const Message = styled.p`
  ${typo['body-4-r']}
  color: #021730;
`;

export const PriceTitle = styled.p`
  ${typo['body-3-b']}
  color: #021730;
  margin-bottom: 8px;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #F4F6F9;
  margin: 8px 0;
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const PriceWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const PriceDescription = styled.p`
  ${typo['body-4-r']}
  color: #4E4E4E;
`;

export const Price = styled.p`
  ${typo['body-4-r']}
  color: #021730;

  & > strong {
    ${typo['body-4-b']};
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