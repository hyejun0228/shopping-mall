import axios from 'axios';
import type { CartItem } from './entity';

// 장바구니에 상품 추가
export const addToCart = async (userId: number, productId: number, quantity = 1) => {
  const response = await axios.post(
    'http://localhost/server/cart/add_to_cart.php',
    {
      user_id: userId,
      product_id: productId,
      quantity,
    },
    { withCredentials: true }
  );
  return response.data;
};

// 장바구니 목록 불러오기 (이제 brand, description도 포함됨)
export const fetchCart = async (userId: number) => {
  const response = await axios.get<CartItem[]>(
    `http://localhost/server/cart/get_cart.php?user_id=${userId}`,
    { withCredentials: true }
  );
  return response.data;
};

// 장바구니에서 상품 제거
export const removeFromCart = async (userId: number, productId: number) => {
  const response = await axios.post(
    'http://localhost/server/cart/remove_from_cart.php',
    {
      user_id: userId,
      product_id: productId,
    },
    { withCredentials: true }
  );
  return response.data;
};
