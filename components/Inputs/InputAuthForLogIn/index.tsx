import { HTMLInputTypeAttribute } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { userDataLogInForm } from "../../forms/FormLogIn";

type props = {
  type: HTMLInputTypeAttribute;
  name: "password" | "email";
  register: UseFormRegister<userDataLogInForm>;
  message: string;
  placeholder: string;
  errorName: FieldError | undefined;
  errorMessage: string | undefined;
};
const InputAuthForLogIn = ({
  errorMessage,
  errorName,
  message,
  name,
  placeholder,
  register,
  type,
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

export default InputAuthForLogIn;
