import axios from 'axios';
import type { Product, ProductDetail } from './entity';

export const fetchProducts = async (categoryId: number, userId: number) => {
  const response = await axios.get<Product[]>(
    `http://localhost/shopping-mall/server/product/get_products.php?category_id=${categoryId}&user_id=${userId}`
  );
  return response.data;
};

export const toggleBookmark = async (userId: number, productId: number) => {
  await axios.post(
    'http://localhost/shopping-mall/server/bookmark/toggle_bookmark.php',
    { user_id: userId, product_id: productId },
    { withCredentials: true }
  );
};

export const fetchProductDetail = async (productId: string): Promise<ProductDetail> => {
  const response = await axios.get(
    `http://localhost/shopping-mall/server/product/get_product_detail.php?product_id=${productId}`,
    { withCredentials: true }
  );
  return response.data;
};

export const searchProducts = async (query: string): Promise<Product[]> => {
  const response = await axios.get(
    `http://localhost/shopping-mall/server/product/search_products.php?q=${encodeURIComponent(query)}`,
    { withCredentials: true }
  );
  return response.data.products;
};

