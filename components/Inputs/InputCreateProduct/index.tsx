import { HTMLInputTypeAttribute } from "react";
import { UseFormRegister } from "react-hook-form";
import { formDataCreateProduct } from "../../forms/FormCreateProduct";
import styles from "../InputAuth/inputAuth.module.css";
type props = {
  register: UseFormRegister<formDataCreateProduct>;
  name: "value" | "name" | "image" | "description";
  tipo: HTMLInputTypeAttribute;
  placeholder: string;
};
export const InputCreateProduct = ({
  register,
  name,
  tipo,
  placeholder,
}: props) => {
  return (
    <div className={styles.input_container}>
      <input
        className={styles.input_auth}
        type={tipo}
        placeholder={placeholder}
        {...register(name, { required: true })}
      />
    </div>
  );
};
