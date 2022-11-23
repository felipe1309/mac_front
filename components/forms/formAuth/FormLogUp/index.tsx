"use client";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { logUp } from "../../../../services/auth/logUp";
import { useRouter } from "next/navigation";
// styles
import styles from "../formAuth.module.css";
// types
import type { userDataLog } from "../../../../types/user";
import InputAuthForLogUp from "../../../Inputs/InputAuth/InputAuthForLofUp";
import { useContextUser } from "../../../../hooks/useContextUser";
import { ButtonAuth } from "../../../Inputs/buttons/ButtonAuth";
import { logUpWhitFacebook } from "../../../../services/auth/logInWhitFacebook";
export type userDataLogUpForm = userDataLog & {
  confirmPassword: string;
};
const FormLogUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<userDataLogUpForm>();
  const { logAuth } = useContextUser();
  useEffect(() => {
    if (window.localStorage.getItem("x-acces-token")) {
      router.replace("/");
    }
  }, []);

  const onSubmit: SubmitHandler<userDataLogUpForm> = async ({
    email,
    name,
    password,
    confirmPassword,
  }) => {
    const dataLogUp = await logUp({
      email,
      name,
      password,
    });
    window.localStorage.setItem("x-acces-token", dataLogUp.token);
    logAuth(dataLogUp.token);
    router.push("/");
  };
  const logUpFacebook = () => {
    logUpWhitFacebook()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <form className={styles.formAuth} onSubmit={handleSubmit(onSubmit)}>
      <h1>Registrate!!</h1>
      <InputAuthForLogUp
        register={register}
        name="name"
        message="nombre requerido"
        placeholder="nombre"
        errorName={errors.name}
        errorMessage={errors.name?.message}
        type="text"
      />
      <InputAuthForLogUp
        register={register}
        name="email"
        message="correo electronico requerido*"
        placeholder="email"
        errorName={errors.email}
        errorMessage={errors.email?.message}
        type="email"
      />
      <InputAuthForLogUp
        register={register}
        name="password"
        message="la contrese;a es requerida*"
        placeholder="contrase;a"
        errorName={errors.password}
        errorMessage={errors.password?.message}
        type="text"
      />
      <InputAuthForLogUp
        message="es necesario corroborar la contrase;a"
        errorMessage={errors.confirmPassword?.message}
        errorName={errors.confirmPassword}
        placeholder="repita la contrase;a"
        register={register}
        validate={(e) => {
          if (e === watch("password")) {
            return true;
          }
          return "la contre;a ingresada no es igual";
        }}
        type="password"
        name="confirmPassword"
      />
      <ButtonAuth value="Crear cuenta" />
      <input
        type={"button"}
        onClick={logUpFacebook}
        value="Registrate con facebook"
      />
    </form>
  );
};

export default FormLogUp;
