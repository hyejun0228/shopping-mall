import styled from 'styled-components';


export const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: start;
  padding: 16px 20px 16px 20px;
  flex-direction: column;
  border-bottom: 1px solid #e0e0e0;
  background: #fff;
  z-index: 5;
  width: 100%;
  box-sizing: border-box;
`;

export const ButtonWrapper = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  background-color: #fff;
  border: none;
`;