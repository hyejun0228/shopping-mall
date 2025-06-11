import axios from 'axios';
import type { Product } from './entity';

// 상품 검색 API
export const searchProducts = async (query: string): Promise<Product[]> => {
  const response = await axios.get(
    `http://localhost/server/product/search_products.php?q=${encodeURIComponent(query)}`,
    { withCredentials: true }
  );
  return response.data.products;
};
