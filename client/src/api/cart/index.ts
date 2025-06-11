import axios from 'axios';
import type { CartItem } from './entity';

export const addToCart = async (userId: number, productId: number, quantity = 1) => {
  const response = await axios.post(
    'http://localhost/shopping-mall/server/cart/add_to_cart.php',
    {
      user_id: userId,
      product_id: productId,
      quantity,
    },
    { withCredentials: true }
  );
  return response.data;
};

export const fetchCart = async (userId: number) => {
  const response = await axios.get<CartItem[]>(
    `http://localhost/shopping-mall/server/cart/get_cart.php?user_id=${userId}`,
    { withCredentials: true }
  );
  return response.data;
};

export const removeFromCart = async (userId: number, productId: number) => {
  const response = await axios.post(
    'http://localhost/shopping-mall/server/cart/remove_from_cart.php',
    {
      user_id: userId,
      product_id: productId,
    },
    { withCredentials: true }
  );
  return response.data;
};
