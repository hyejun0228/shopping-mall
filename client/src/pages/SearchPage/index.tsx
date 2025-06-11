import { useState } from 'react';
import * as S from './SearchPage.styled';
import { searchProducts } from '../../api/product';
import type { Product } from '../../api/product/entity';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    try {
      setIsLoading(true);
      const data = await searchProducts(query);
      setResults(data);
    } catch (err) {
      console.error('검색 실패:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.Container>
      <S.SearchBar>
        <S.Input
          type="text"
          placeholder="검색어를 입력하세요"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <S.Button onClick={handleSearch}>검색</S.Button>
      </S.SearchBar>

      <S.ResultsWrapper>
        {isLoading ? (
          <div>검색 중...</div>
        ) : (
          results.map((product) => (
            <S.ProductCard key={product.id}>
              <S.ProductImage src={product.image_url} alt={product.name} />
              <S.ProductInfo>
                <S.ProductName>{product.name}</S.ProductName>
                <S.ProductPrice>{product.price.toLocaleString()}원</S.ProductPrice>
              </S.ProductInfo>
            </S.ProductCard>
          ))
        )}
      </S.ResultsWrapper>
    </S.Container>
  );
}
