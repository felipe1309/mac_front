"use client";
import { useContextStore } from "../../../hooks/useContextStore";
import style from "./style.module.css";
export const HeaderCard = () => {
  const { cardState } = useContextStore();
  const listPrices = cardState.map((product) => {
    return product.value * product.count;
  });
  const costoTotal =
    cardState.length === 0 ? 0 : listPrices.reduce((red, bs) => red + bs);
  return (
    <header className={style.header}>
      <h1>Carrito</h1>
      <div className="storage">
        <span>N. Productos : {cardState.length}</span>
        <span>Total : {costoTotal}</span>
        <button>Comprar</button>
      </div>
    </header>
  );
};
