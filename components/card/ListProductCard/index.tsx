"use client";
import { useContextStore } from "../../../hooks/useContextStore";
import { ListProductCardItem } from "./ListProductCardItem";
import style from "./style.module.css";
export const ListProductCard = () => {
  const { cardState } = useContextStore();
  return (
    <main className={style.main}>
      {cardState.map((product) => (
        <ListProductCardItem {...product} />
      ))}
    </main>
  );
};
