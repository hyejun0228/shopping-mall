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

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  margin: 8px 0 0 0;
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  border-bottom: 1px solid #d6dae0;

  & > div {
    display: flex;
    ${typo['body-4-m']};
  }

  & > span {
    ${typo['body-4-m']};
    color: #021730;
  }

  & > svg {
    width: 16px;
  }
`;

export const ItemBody = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  align-items: center;
  padding: 0 16px 16px 16px;
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

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;

  & > div {
    ${typo['label-1-r']};
  }
`;

export const Result = styled.div`
  ${typo['label-1-r']};
  display: flex;
`;

