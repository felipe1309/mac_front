import axios from "axios";
import { product } from "../../types/product";

export const getAllProducts = async (): Promise<product[] | null> => {
  try {
    const dataGetProducts = await axios.get(
      "http://localhost:4000/products/getAllProducts"
    );
    return dataGetProducts.data as product[];
  } catch (error) {
    console.error(error);
    return null;
  }
};
