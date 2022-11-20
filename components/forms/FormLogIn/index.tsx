"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { logIn } from "../../../services/auth/logIn";
import type { userDataLog } from "../../../types/user";
import InputAuthForLogIn from "../../Inputs/InputAuthForLogIn";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export type userDataLogInForm = Omit<userDataLog, "name">;
const FormLogIn = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<userDataLogInForm>();
  useEffect(() => {
    if (window.localStorage.getItem("x-acces-token")) {
      router.replace("/");
    }
  }, []);

  const onSubmit: SubmitHandler<userDataLogInForm> = async (data) => {
    const dataLogIn = await logIn(data);
    console.log(data)
    window.localStorage.setItem("x-acces-token", dataLogIn.token);
    router.push("/");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <button>Iniciar</button>
    </form>
  );
};

export default FormLogIn;
