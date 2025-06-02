import { useQuery } from "@tanstack/react-query";
import * as S from "./MainPage.styled";
import axios from "axios";
import { useState } from "react";
import Poster from "../../components/Poster";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

function MainPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get<Product[]>(
        "http://localhost/get_products.php"
      );
      return res.data;
    },
  });
  return (
    <>
      <S.MainWrapper>
        <Poster />
                      <S.SearchBar
                        type="text"
                        placeholder="상품명을 입력하세요..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
        {isLoading && <p>로딩 중...</p>}
        {error && <p>상품을 불러오는 데 실패했습니다.</p>}
        <S.ProductGrid>
          {products.map(({ id, name, price }) => (
            <S.ProductCard key={id}>
              {/* <img src={product.image} alt={product.name} /> */}
              <h4>{name}</h4>
              <p>{Number(price).toFixed(0)}</p>
            </S.ProductCard>
          ))}
        </S.ProductGrid>
      </S.MainWrapper>
    </>
  );
}

export default MainPage;
