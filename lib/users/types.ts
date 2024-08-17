export interface User {
  id: number;
  brand: string;
  name: string;
  price: number;
  description: string;
  category: string;
  created_at: Date;
  updated_at: Date;
  image_link: string;
  stock: number;
}
