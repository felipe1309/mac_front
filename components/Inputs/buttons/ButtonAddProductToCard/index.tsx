"use client";
import { useContextStore } from "../../../../hooks/useContextStore";
import { product } from "../../../../types/product";
export const ButtonAddProductToCard = ({
  _id,
  description,
  image,
  name,
  value,
}: product) => {
  const { addProductToCard } = useContextStore();
  const haddleClick = () => {
    addProductToCard({
      _id,
      description,
      image,
      name,
      value,
    });
  };
  return <button onClick={haddleClick}>Añadir al carrito</button>;
};
