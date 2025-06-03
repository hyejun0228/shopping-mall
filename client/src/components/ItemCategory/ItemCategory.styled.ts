import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  width: calc(100% - 120px);
`;

export const CategoryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 16px;
  margin-top: 16px;
`;

export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: #fafafa;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
  text-align: center;
  color: #021730;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  &:hover {
    background-color: #f3f4f6;
    border-color: #d1d5db;
  }
`;