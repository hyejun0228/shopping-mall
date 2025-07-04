import styled from 'styled-components';
import typo from '../../../styles/typo';

interface DescriptionWrapperProps {
  isMobile?: boolean;
}

export const Container = styled.div<DescriptionWrapperProps>`
  padding: 0 40px;
  background-color: #f9f9f9;
  min-height: calc(100vh - 160px);

  ${({ isMobile }) =>
    isMobile &&
    `
    padding: 0px 24px 30px 24px;
    width: 100%;
  `}
`;

export const Title = styled.h2<DescriptionWrapperProps>`
  ${typo['subtitle-1-b']};
  color: #021730;
  margin: 0 0 24px 0;

  ${({ isMobile }) =>
    isMobile &&
    `
    font-size: 20px;
    line-height: 32px;
    margin: 16px 0 16px 0;
  `}
`;

export const ItemWishWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #D6DAE0; */
`;

export const Item = styled.div`
  display: flex;
  background-color: #f9f9f9;
  margin: 8px 0 0 0;
  padding: 12px 16px;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: 80px;
  height: 74px;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;


export const bodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
`;

export const title = styled.h3`
  ${typo['body-4-m']};
  color: #021730;
`;

export const size = styled.span`
  ${typo['body-4-m']};
  color: #021730;
`;

export const price = styled.span`
${typo['label-1-m']};
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #5A6B7F;

  & > strong {
    ${typo['body-3-b']};
    color: #021730;
  }
`;