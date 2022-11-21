import { HTMLInputTypeAttribute } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import type { userDataLogUpForm } from "../../../forms/formAuth/FormLogUp";
import styles from "../inputAuth.module.css"
type props = {
  type: HTMLInputTypeAttribute;
  name: "name" | "password" | "email" | "confirmPassword";
  register: UseFormRegister<userDataLogUpForm>;
  message: string;
  placeholder: string;
  errorName:FieldError | undefined
  errorMessage:string | undefined
  validate?:(e:string)=> boolean | string
};
const InputAuthForLogUp = ({
  message,
  name,
  placeholder,
  register,
  type,
  errorName,
  errorMessage,
  validate
}: props) => {
  return (
    <div
    className={styles.input_container}
    >
      <input
      className={styles.input_auth}
        type={type}
        {...register(name, {
          required: message,
          validate
        })}
        placeholder={placeholder}
      />
      {errorName && <span>{errorMessage}</span>}
    </div>
  );
};

export default InputAuthForLogUp;
