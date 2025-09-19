import axios from "axios";
import { Product } from "../types/Product";


export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};
