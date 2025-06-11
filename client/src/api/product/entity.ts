export interface Product {
  id: number;
  name: string;
  price: string;
  brand: string;
  image_url: string;
  bookmarked: boolean;
}

export interface ProductDetail {
  id: number;
  name: string;
  price: string;
  image_url: string;
  brand: string;
  description?: string;
}
