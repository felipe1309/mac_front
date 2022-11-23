"use client";
export type formDataCreateProduct = {
  name: string;
  value: number;
  image: FileList;
};
import { useForm, SubmitHandler } from "react-hook-form";
import { useContextUser } from "../../../hooks/useContextUser";
import { createProduct } from "../../../services/store/createProduct";
import { useState } from "react";
import { ButtonAuth } from "../../Inputs/buttons/ButtonAuth";
import { InputCreateProduct } from "../../Inputs/InputCreateProduct";
import styles from "./formCreateProduct.module.css";
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
    // if (typeof authData.token === "string") {
    //   const newProduct = await createProduct(
    //     {
    //       name: data.name,
    //       value: Number(data.value),
    //       image: data.image[0],
    //     },
    //     authData.token
    //   );
    //   console.log(newProduct);
    // }
    console.log(data.image[0]);
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
