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

export const ItemListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #D6DAE0;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  margin: 8px 0 0 0;
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  border-bottom: 1px solid #d6dae0;

  & > div {
    display: flex;
    ${typo['body-4-m']};
  }

  & > span {
    ${typo['body-4-m']};
    color: #021730;
  }

  & > svg {
    width: 16px;
  }
`;

export const ItemBody = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  align-items: center;
  padding: 0 16px 16px 16px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  background-color: #D6DAE0;
  border-radius: 8px;
  height: 80px;
  width: 80px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;

  & > div {
    ${typo['label-1-r']};
  }
`;

export const Result = styled.div`
  ${typo['label-1-r']};
  display: flex;
`;
