import axios from "axios";
import { product } from "../../types/product";
export type dataCreateProduct = Omit<product ,'_id'  | 'image'> & {
  image: File
}
export const createProduct = async (
  data: dataCreateProduct,
  token: string
): Promise<product | null> => {
  try {
    const form = new FormData();
    for (let key in data) {
      form.append(key, data[key]);
    }
    const product = await axios.post(
      "http://localhost:4000/products/addProduct",
      form,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          token,
        },
      }
    );
    return product.data as product;
  } catch (error) {
    console.log(error);
    return null;
  }
};
