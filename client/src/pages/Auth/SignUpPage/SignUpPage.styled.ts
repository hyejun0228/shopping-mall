import styled from 'styled-components';
import typo from '../../../styles/typo';

export const Container = styled.div`
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  min-height: calc(100vh - 160px);
`;

export const Title = styled.h1`
  ${typo['title-1-b']};
  margin-bottom: 8px;
  color: #021730;
`;

export const SubTitle = styled.h2`
  ${typo['body-3-b']};
  color: #021730;
  margin-bottom: 60px;
`;

export const LoginForm = styled.form`
  display: flex;
  width: 400px;
  flex-direction: column;
  gap: 40px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  background-color: #021730;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const GoToSignUpWrapper = styled.div`
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
`;
