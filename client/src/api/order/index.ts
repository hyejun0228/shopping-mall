import axios from 'axios';
import type { CreateOrderRequest } from './entity';


export const createOrder = async (order: CreateOrderRequest) => {
  const response = await axios.post(
    'http://localhost/shopping-mall/server/order/create_order.php',
    order,
    { withCredentials: true }
  );
  return response.data;
};

export const fetchOrders = async (userId: number) => {
  const response = await axios.get('http://localhost/shopping-mall/server/order/get_orders.php', {
    params: { user_id: userId },
    withCredentials: true,
  });
  return response.data.orders;
};
