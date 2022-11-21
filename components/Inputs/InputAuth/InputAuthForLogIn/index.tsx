import { HTMLInputTypeAttribute } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { userDataLogInForm } from "../../../forms/formAuth/FormLogIn";
import styles from "../inputAuth.module.css"
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
    <div className={styles.input_container}>
      <input
      className={styles.input_auth}
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
