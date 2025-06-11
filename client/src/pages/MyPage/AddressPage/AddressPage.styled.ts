import styled from 'styled-components';
import typo from '../../../styles/typo';

export const Container = styled.div`
  padding: 0 40px;
  background-color: #f9f9f9;
  min-height: calc(100vh - 160px);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  ${typo['subtitle-1-b']};
  color: #021730;
  margin: 0 0 24px 0;
`;

export const Button = styled.button`
  ${typo['label-1-m']};
  color: #021730;
  background-color: #fff;
  border: 1px solid #D6DAE0;
  padding: 0px 12px;
  border-radius: 8px;
  cursor: pointer;
  height: 36px;

  &:hover {
    background-color: #D6DAE0;
    color: #021730;
  }
`;

export const AddressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  align-items: start;
  width: 100%;
`;

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const AddressTitle = styled.h3`
  ${typo['body-1-b']};
  color: #021730;
`;

export const AddressCard = styled.div`
  ${typo['body-4-b']};
  padding: 12px 16px;
  border: 1px solid #D6DAE0;
  border-radius: 8px;
  width: 100%;
`;

export const CardText = styled.p`
  display: flex;
  ${typo['body-4-r']};
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 4px;
`;

export const SmallButton = styled.button`
  ${typo['caption-1-m']};
  color: #021730;
  border: 1px solid #D6DAE0;
  padding: 0px 12px;
  border-radius: 8px;
  cursor: pointer;
  height: 32px;
  background-color: #fff;

  &:hover {
    background-color: #D6DAE0;
    color: #021730;
  }
`;
