"use client";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { logUp } from "../../../services/auth/logUp";
import { useRouter } from "next/navigation";
// types
import type { userDataLog } from "../../../types/user";
import InputAuthForLogUp from "../../Inputs/InputAuthForLofUp";
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
    router.push("/");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <div className="ButomFormAuth">
        <input
          type="text"
          {...register("confirmPassword", {
            required: "confirmar la contrase;a es necesario",
            validate: (e) => {
              if (e === watch("password")) {
                return true;
              }
              return "la contre;a ingresada no es igual";
            },
          })}
          placeholder="confirmar"
        />
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}
      </div>
      <button>Crear cuenta</button>
    </form>
  );
};

export default FormLogUp;
