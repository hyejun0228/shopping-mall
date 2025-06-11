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
