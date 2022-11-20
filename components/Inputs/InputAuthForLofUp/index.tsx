import { HTMLInputTypeAttribute } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import type { userDataLogUpForm } from "../../forms/FormLogUp";
type props = {
  type: HTMLInputTypeAttribute;
  name: "name" | "password" | "email" | "confirmPassword";
  register: UseFormRegister<userDataLogUpForm>;
  message: string;
  placeholder: string;
  errorName:FieldError | undefined
  errorMessage:string | undefined
};
const InputAuthForLogUp = ({
  message,
  name,
  placeholder,
  register,
  type,
  errorName,
  errorMessage
}: props) => {
  return (
    <div>
      <input
        type={type}
        {...register(name, {
          required: message,
        })}
        placeholder={placeholder}
      />
      {errorName && <span>{errorMessage}</span>}
    </div>
  );
};

export default InputAuthForLogUp;
