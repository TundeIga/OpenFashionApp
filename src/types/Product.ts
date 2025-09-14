export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}
export interface CartItem extends Product {
  quantity: number;
}
export interface Category {
  id: string;
  name: string;
}
export interface User {
  id: string;
  name: string;
  email: string;
}
export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  date: string;
}