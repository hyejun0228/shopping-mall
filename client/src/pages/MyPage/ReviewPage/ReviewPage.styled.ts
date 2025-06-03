import styled from 'styled-components';
import typo from '../../../styles/typo';

export const Container = styled.div`
  padding: 0 40px;
  background-color: #f9f9f9;
  min-height: calc(100vh - 160px);
`;

export const Title = styled.h2`
  ${typo['subtitle-1-b']};
  color: #021730;
  margin: 0 0 24px 0;
`;

export const ItemReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #D6DAE0;
`;

export const Item = styled.div`
  display: flex;
  background-color: #f9f9f9;
  margin: 8px 0 0 0;
  padding: 12px 16px;
  justify-content: space-between;
`;
