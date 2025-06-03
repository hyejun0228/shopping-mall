import styled from 'styled-components';
import typo from '../../styles/typo';


export const Container = styled.main`
  padding: 60px 40px;
  background-color: #f9f9f9;
  min-height: calc(100vh - 160px);
`;

export const SectionWrapper = styled.div`
  display: flex;
`;

export const ListSection = styled.section`
  display: flex;
  width: 180px;
  flex-direction: column;
`;

export const Title = styled.h2`
  ${typo['subtitle-1-b']}
  color: #021730;
  margin-bottom: 24px;
`;

export const SubTitle = styled.h3`
  ${typo['body-1-b']}
  color: #021730;
  margin-bottom: 16px;
`;

export const ItemTitle = styled.h4`
  ${typo['body-3-m']}
  color: #25374C;
  margin-bottom: 8px;
  cursor: pointer;
`;

export const ContentSection = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;
