import styled from 'styled-components';

export const MainWrapper = styled.main`
  min-height: calc(100vh - 140px);
  padding: 40px;
  background: linear-gradient(to bottom, #ffffff, #f4f4f4);
`;

export const Hero = styled.section`
  text-align: center;
  padding: 80px 20px;
  background-color: #e6f2ff;
  border-radius: 16px;
  margin-bottom: 60px;
`;

export const Title = styled.h2`
  font-size: 42px;
  margin-bottom: 16px;
  color: #1e90ff;
  font-weight: 700;
`;

export const Description = styled.p`
  font-size: 20px;
  color: #444;
`;

export const ProductGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
  margin-top: 40px;
`;

export const ProductCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  img {
    width: 100%;
    height: 240px;
    object-fit: cover;
  }

  h4 {
    font-size: 18px;
    margin: 12px 0 6px;
    color: #222;
  }

  p {
    font-size: 15px;
    color: #888;
    margin-bottom: 16px;
  }
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