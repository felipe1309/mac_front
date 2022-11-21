"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { logIn } from "../../../../services/auth/logIn";
import type { userDataLog } from "../../../../types/user";
import InputAuthForLogIn from "../../../Inputs/InputAuth/InputAuthForLogIn";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useContextUser } from "../../../../hooks/useContextUser";
import styles from "../formAuth.module.css";
import { ButtonAuth } from "../../../Inputs/buttons/ButtonAuth";
export type userDataLogInForm = Omit<userDataLog, "name">;
const FormLogIn = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<userDataLogInForm>();
  const { logAuth } = useContextUser();
  useEffect(() => {
    if (window.localStorage.getItem("x-acces-token")) {
      router.replace("/");
    }
  }, []);

  const onSubmit: SubmitHandler<userDataLogInForm> = async (data) => {
    const dataLogIn = await logIn(data);
    console.log(data);
    window.localStorage.setItem("x-acces-token", dataLogIn.token);
    logAuth(dataLogIn.token);
    router.push("/");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formAuth}>
      <h1>Iniciar Sesion</h1>
      <InputAuthForLogIn
        name="email"
        errorMessage={errors.email?.message}
        errorName={errors.email}
        placeholder="correo electronico"
        register={register}
        message="el correo electronico es requerido*"
        type="email"
      />
      <InputAuthForLogIn
        name="password"
        errorMessage={errors.password?.message}
        errorName={errors.password}
        placeholder="contrase;a"
        register={register}
        message="la contrase;a es requerida*"
        type="password"
      />
      <ButtonAuth value="Iniciar" />
    </form>
  );
};

export default FormLogIn;
