import styled from 'styled-components';
import typo from '../../styles/typo';

interface DescriptionWrapperProps {
  isMobile?: boolean;
}

export const Container = styled.main<DescriptionWrapperProps>`
  padding: 60px 40px;
  background-color: #f9f9f9;
  min-height: calc(100vh - 160px);

  ${({ isMobile }) =>
    isMobile &&
    `
    padding: 0px 0px 30px 0px;
  `}
`;

export const SectionWrapper = styled.div<DescriptionWrapperProps>`
  display: flex;

    ${({ isMobile }) =>
    isMobile &&
    `
    flex-direction: column;
    width: 100%;
  `}
`;

export const ListSection = styled.section<DescriptionWrapperProps>`
  display: flex;
  width: 180px;
  flex-direction: column;

  ${({ isMobile }) =>
    isMobile &&
    `
    width: 100%;
    flex-direction: row;
    gap: 12px;
    background-color: #fff;
    padding: 12px 8px 0 24px ;
    border-bottom: 1px solid #e0e0e0;
  `}
`;

export const Title = styled.h2<DescriptionWrapperProps>`
  ${typo['subtitle-1-b']}
  color: #021730;
  margin-bottom: 24px;

  ${({ isMobile }) =>
    isMobile &&
    `
    display: none;
  `}
`;

export const SubTitle = styled.h3<DescriptionWrapperProps>`
  ${typo['body-1-b']}
  color: #021730;
  margin-bottom: 16px;

  ${({ isMobile }) =>
    isMobile &&
    `
    display: none;
  `}
`;

export const ItemTitle = styled.h4<{ $active: boolean, isMobile?: boolean }>`
  ${typo['body-3-m']}

  margin-bottom: 8px;
  cursor: pointer;
  color: #021730;
  font-weight: ${({ $active }) => ($active ? 'bold' : 'normal')};

  ${({ isMobile }) =>
    isMobile &&
    `
    // margin: 0 8px 8px 24px;
  `}
`;

export const ContentSection = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;
