"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useContextUser } from "../../../hooks/useContextUser";
import { createProduct } from "../../../services/store/createProduct";
import type { dataCreateProduct } from "../../../services/store/createProduct";
import { useState } from "react";
import { ButtonAuth } from "../../Inputs/buttons/ButtonAuth";
import { InputCreateProduct } from "../../Inputs/InputCreateProduct";
import styles from "./formCreateProduct.module.css";
export type formDataCreateProduct = Omit<dataCreateProduct, "image"> & {
  image: FileList;
};
export const FormCreateProduct = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<formDataCreateProduct>();
  const { authData } = useContextUser();
  const [urlImage, setUrlImage] = useState<null | string>(null);
  const onSubmit: SubmitHandler<formDataCreateProduct> = async (data) => {
    if (typeof authData.token === "string") {
      const newProduct = await createProduct(
        {
          name: data.name,
          value: Number(data.value),
          image: data.image[0],
          description: data.description,
        },
        authData.token
      );
      console.log(newProduct);
    }
    const fr = new FileReader();
    fr.readAsDataURL(data.image[0]);
    fr.addEventListener("load", () => {
      setUrlImage(fr.result as string);
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h1>Create Product</h1>
      <InputCreateProduct
        register={register}
        placeholder="Nombre del producto"
        tipo="text"
        name="name"
      />
      <InputCreateProduct
        register={register}
        placeholder="descripcion (entre 25 a 300 letras)"
        tipo="text"
        name="description"
      />
      <InputCreateProduct
        placeholder="Valor"
        register={register}
        tipo="number"
        name="value"
      />
      <InputCreateProduct
        placeholder="imagen"
        register={register}
        tipo="file"
        name="image"
      />
      {urlImage ? <img src={urlImage} alt="" /> : null}

      <ButtonAuth value="Crear" />
    </form>
  );
};
