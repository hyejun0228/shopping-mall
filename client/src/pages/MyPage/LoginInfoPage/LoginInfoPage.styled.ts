import styled from 'styled-components';
import typo from '../../../styles/typo';


export const Container = styled.div`
  padding: 0 40px;
  background-color: #f9f9f9;
  min-height: calc(100vh - 160px);
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  ${typo['subtitle-1-b']};
  color: #021730;
  margin: 0 0 24px 0;
`;

export const ItemListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin-bottom: 24px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 16px 24px;
  gap: 16px;
  border: 1px solid #e5e7eb;
`;

export const InfoImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 50%;
`;

export const InfoItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InfoName = styled.p`
  ${typo['body-1-sb']};
  color: #021730;
`;

export const InfoEmail = styled.p`
  ${typo['label-1-m']};
  color: #6B7280;
`;
