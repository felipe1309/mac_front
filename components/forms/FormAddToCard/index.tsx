"use client";
import { product } from "../../../types/product";
import { useState, ChangeEvent, FormEvent } from "react";
import { useContextStore } from "../../../hooks/useContextStore";
import axios from "axios";
type props = {
  product: product;
};
type formAddProductToCard = {
  count: number;
};
const initialState: formAddProductToCard = {
  count: 1,
};
export const FormAddToCard = ({ product }: props) => {
  const [dataForm, setDataForm] = useState<formAddProductToCard>(initialState);
  const { addProductToCard } = useContextStore();
  const haddleCount = (e: ChangeEvent<HTMLInputElement>) => {
    setDataForm({
      ...dataForm,
      count: Number(e.target.value),
    });
  };
  const haddleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addProductToCard({
      ...product,
      count: dataForm.count,
    });
  };
  return (
    <form onSubmit={haddleSubmit}>
      <label htmlFor="cantidad_form-add-to-card">
        <span>Cantidad</span>
        <input
          type="number"
          name="cantidad_form-add-to-card"
          value={dataForm.count}
          onChange={haddleCount}
        />
      </label>
      <button>A;adir al carrito</button>
      <input type="button" value="codigo" />
    </form>
  );
};
