export interface CreateOrderItem {
  product_id: number;
  quantity: number;
  price: number;
}

export interface CreateOrderRequest {
  user_id: number;
  total_price: number;
  recipient_name: string;
  recipient_phone: string;
  postal_code: string;
  address: string;
  detail_address: string;
  payment_method: string; 
  items: CreateOrderItem[];
}

export interface OrderItem {
  id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  price: number;
  name: string;
  image_url: string;
}

export interface Order {
  id: number;
  user_id: number;
  total_price: number;
  status: string;
  recipient_name: string;
  recipient_phone: string;
  postal_code: string;
  address: string;
  detail_address: string;
  created_at: string;
  items: OrderItem[];
}
