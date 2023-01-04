import { useState, useEffect } from "react";
import { product } from "../types/product";
export type productCard = product & {
  count:number
}
export const useCard = () => {
  const [cardState, setCardState] = useState<productCard[]>([]);
  const addProductToCard = (product: productCard) => {
    setCardState([...cardState, product]);
  };
  return { cardState, addProductToCard };
};
