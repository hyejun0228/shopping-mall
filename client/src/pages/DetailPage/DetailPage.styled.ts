import styled from "styled-components";
import typo from '../../styles/typo';

interface DescriptionWrapperProps {
  isMobile?: boolean;
}

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
`;

export const Body = styled.div<ImageWrapperProps>`
  display: flex;
  max-width: 1200px;
  width: calc(100% - 20px);
  padding: 40px 0 0 0;
  gap: 40px;

  ${({ isMobile }) =>
    isMobile &&
    `
    flex-direction: column;
    width: 100%;
    min-height: calc(100vh - 80px);
    gap: 20px;
  `}
`;

export const DescriptionWrapper = styled.div<DescriptionWrapperProps>`
  display: flex;
  gap: 40px;
  width: 100%;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  ${({ isMobile }) =>
    isMobile &&
    `
    padding: 0 20px;
  `}
`;

interface ImageWrapperProps {
  isMobile?: boolean;
}

export const ImageWrapper = styled.div<ImageWrapperProps>`
  display: flex;
  min-width: ${({ isMobile }) => (isMobile ? '100%' : '440px')};
  height: ${({ isMobile }) => (isMobile ? 'auto' : '440px')};
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-grow: 1;
  padding: 8px 0;
  justify-content: space-between;
`;

export const ItemPrice = styled.div`
  ${typo['body-1-b']}
  color: #021730;
`;

export const ItemTitle = styled.h1`
  ${typo['subtitle-1-m']}
  color: #021730;
`;

export const DescriptionTitle = styled.h2`
  ${typo['body-1-m']}
  color: #738293;
`;

export const ButtonWrapper = styled.div<ImageWrapperProps>`
  display: flex;
  gap: 8px;
  width: 100%;

  ${({ isMobile }) =>
    isMobile &&
    `
    padding: 12px 0 0 0;
  `}
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  background-color: #021730;
  color: #ffffff;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const DetailBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: calc(100% - 20px);
  min-height: calc(100vh - 160px);
  padding: 40px 60px;


`;

export const SizeWrapper = styled.div`
  display: flex;
  min-width: 100%;
  height: 100%;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
