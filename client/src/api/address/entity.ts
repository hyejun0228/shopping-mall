export interface AddressForm {
  user_id: number;
  name: string;
  phone: string;
  postal_code: string;
  address: string;
  detail_address: string;
  is_main_address: 0 | 1;
}

export interface Address {
  id: number;
  user_id: number;
  name: string;
  phone: string;
  postal_code: string;
  address: string;
  detail_address: string;
  is_main_address: 0 | 1;
  created_at: string;
}
