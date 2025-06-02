import styled from 'styled-components';
import typo from '../../styles/typo';

export const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  padding: 8px 20px 16px 20px;
  flex-direction: column;
  border-bottom: 1px solid #e0e0e0;
  background: #fff;
  height: 72px;
  z-index: 5;
  width: 100%;
  box-sizing: border-box;
`;

export const HeaderTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  width: 100%;
`;

export const HeaderItemWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 100%;
  align-items: center;
  width: 100%;
`;

export const HeaderTitle = styled.h1`
  ${typo['subtitle-1-b']}
  color: #021730;
  cursor: pointer;
`;

export const HeaderSubTitle = styled.h2`
  ${typo['caption-1-m']}
  color: #021730;
`;

export const HeaderButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const HeaderButton = styled.button`
  ${typo['caption-1-m']}
  color: #021730;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    ${typo['caption-1-b']}
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 20px;

  & > svg {
    cursor: pointer;
  }
`;