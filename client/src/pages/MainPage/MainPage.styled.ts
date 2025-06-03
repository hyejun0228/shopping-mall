import styled from 'styled-components';

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding-bottom: 80px;
`;

export const PosterWrapper = styled.div`
  min-height: calc(100vh - 140px);
  padding: 40px;
  background: linear-gradient(to bottom, #ffffff, #f4f4f4);
`;

export const SearchBar = styled.input`
  padding: 10px 16px;
  font-size: 16px;
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin: 0 auto;
`;
