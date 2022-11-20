"use client";
export type formDataCreateProduct = {
  name: string;
  value: number;
  image: FileList;
};
import { useForm, SubmitHandler } from "react-hook-form";
import { useContextUser } from "../../../hooks/useContextUser";
import { createProduct } from "../../../services/store/createProduct";
const FormCreateProduct = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<formDataCreateProduct>();
  const { authData } = useContextUser();
  const onSubmit: SubmitHandler<formDataCreateProduct> = async (data) => {
    if (typeof authData.token === "string") {
      const newProduct = await createProduct(
        {
          name: data.name,
          value: Number(data.value),
          image: data.image[0],
        },
        authData.token
      );
      console.log(newProduct);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>create product</h2>
      <div className="form__create-product">
        <input
          type="text"
          placeholder="nombre del producto"
          {...register("name", { required: true })}
        />
      </div>
      <div className="form__create-product">
        <input
          type="number"
          placeholder="valor del producto"
          {...register("value", { required: true })}
        />
      </div>
      <div className="form__create-product">
        <input
          type="file"
          placeholder="imagen"
          {...register("image", { required: true })}
        />
      </div>
      <button>crear producto</button>
    </form>
  );
};

export default FormCreateProduct;
