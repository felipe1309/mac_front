"use client";
import { layout } from "../../types/layout";
import { createContext } from "react";
import { product } from "../../types/product";
import { productCard, useCard } from "../../hooks/useCard";
type context = {
  cardState: productCard[];
  addProductToCard: (product: productCard) => void;
};
export const ContextStore = createContext<context>({} as context);
const layout = ({ children }: layout) => {
  const { addProductToCard, cardState } = useCard();
  const value = {
    addProductToCard,
    cardState,
  };
  return (
    <ContextStore.Provider value={value}>{children}</ContextStore.Provider>
  );
};

export default layout;
