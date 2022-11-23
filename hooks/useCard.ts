import { useState, useEffect } from "react";
import { product } from "../types/product";

export const useCard = () => {
  const [cardState, setCardState] = useState<product[]>([]);
  const addProductToCard = (product: product) => {
    setCardState([...cardState, product]);
  };
  return { cardState, addProductToCard };
};
