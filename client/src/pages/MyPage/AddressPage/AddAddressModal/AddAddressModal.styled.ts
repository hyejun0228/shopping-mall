import styled from 'styled-components';
import typo from '../../../../styles/typo';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainerForm = styled.form`
  background: #fff;
  padding: 20px 24px;
  border-radius: 12px;
  width: 400px;
  max-width: 90%;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.h2`
  ${typo['body-1-sb']};
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
  gap: 16px;
`;

export const Label = styled.label`
  ${typo['body-4-r']};
  display: flex;
  align-items: center;
  color: #797A86;
  gap: 4px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`;

export const CancelButton = styled.button`
  ${typo['label-1-m']};
  color: #D6DAE0;
  border: 1px solid #D6DAE0;
  padding: 4px 8px;
  border-radius: 8px;
  cursor: pointer;
  height: 36px;
  background-color: #fff;
  width: 80px;

  &:hover {
    background-color: #D6DAE0;
    color: #021730;
  }
`;

export const AddButton = styled.button`
  ${typo['label-1-m']};
  color: #D6DAE0;
  border: 1px solid #D6DAE0;
  padding: 4px 8px;
  border-radius: 8px;
  cursor: pointer;
  height: 36px;
  background-color: #fff;
  width: 80px;

  &:hover {
    background-color: #D6DAE0;
    color: #021730;
  }
`;
