import axios from "axios";
import { product } from "../../types/product";

export const getProduct = async (
  idProduct: string
): Promise<product | null> => {
  try {
    const getProduct = await axios.get(
      `http://localhost:4000/products/${idProduct}`
    );
    return getProduct.data as product;
  } catch (error) {
    console.log(error);
    return null;
  }
};
