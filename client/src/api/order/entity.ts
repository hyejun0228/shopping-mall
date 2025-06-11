// 주문 생성 시 필요한 상품 정보만 담은 타입
export interface CreateOrderItem {
  product_id: number;
  quantity: number;
  price: number;
}

// 주문 생성 요청
export interface CreateOrderRequest {
  user_id: number;
  total_price: number;
  recipient_name: string;
  recipient_phone: string;
  postal_code: string;
  address: string;
  detail_address: string;
  payment_method: string; // 누락돼 있었다면 꼭 추가!
  items: CreateOrderItem[];
}

export interface OrderItem {
  id: number;               // order_items 테이블의 기본 키
  order_id: number;
  product_id: number;
  quantity: number;
  price: number;
  name: string;             // 상품 이름 (products.name)
  image_url: string;        // 상품 이미지 (products.image_url)
}

export interface Order {
  id: number;               // 주문 ID
  user_id: number;
  total_price: number;
  status: string;
  recipient_name: string;
  recipient_phone: string;
  postal_code: string;
  address: string;
  detail_address: string;
  created_at: string;
  items: OrderItem[];       // 포함된 상품들
}
