import styled from 'styled-components';
import typo from '../../styles/typo';

export const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  padding: 8px 20px;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
  background: #fff;
  height: 72px;
  z-index: 5;
  width: 100%;
  box-sizing: border-box;
`;

export const HeaderTitleWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const HeaderTitle = styled.h1`
  ${typo['body-1-m']}
  color: #154978;

`;

export const HeaderSubTitle = styled.h2`
  ${typo['caption-1-m']}
  color: #154978;
`;

export const HeaderButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const HeaderButton = styled.button`
  ${typo['body-3-m']}
  color: #154978;
  background: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;