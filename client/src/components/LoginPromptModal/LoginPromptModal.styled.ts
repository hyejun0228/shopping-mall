import styled from 'styled-components';
import typo from '../../styles/typo';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 12px;
  padding: 20px 24px;
  width: 320px;
  text-align: center;
  justify-content: space-between;
  gap: 18px;
`;

export const Title = styled.h2`
  ${typo['body-1-r']};
`;

export const Message = styled.p`
  ${typo['body-1-r']};
  color: #555;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

export const Button = styled.button`
  ${typo['label-1-r']};
  width: 120px;
  padding: 12px 12px;
  background: #ddd;
  border: none;
  border-radius: 6px;
`;

export const LoginButton = styled(Button)`
  background: #021730;
  color: white;
`;
