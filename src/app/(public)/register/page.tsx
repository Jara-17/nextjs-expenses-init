"use client";

import { authSchema, AuthSchema } from "@/shared/schemas/auth.schema";
import { registerService } from "@/shared/services/register.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function Register() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuthSchema>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = async (dataForm: AuthSchema) => {
    try {
      const responseData = await registerService(dataForm);

      if (responseData.token) {
        localStorage.setItem("token", responseData.token);
        router.push("/dashboard");
      } else {
        throw new Error("No se recibió un token");
      }
    } catch (err) {
      console.log(err);
      // TODO: Manejar el error con un toast por ejemplo
    }
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 text-white">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Registrate</h1>
      </div>

      <div
        className=" 
        bg-gray-900 
        p-10
        rounded-lg 
        shadow-md
        shadow-violet-500
        border
        border-violet-500
        text-white
        max-w-md 
        mx-auto 
        mb-0 
        mt-8 
        space-y-4 
        "
      >
        <h2 className="font-bold mb-8 text-xl text-violet-500">
          Crea tu cuenta
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Email"
            type="email"
            variant="bordered"
            {...register("email")}
            errorMessage={errors.email?.message}
            color="secondary"
            isInvalid={!!errors.email}
          />
          <Input
            label="Contraseña"
            type="password"
            variant="bordered"
            {...register("password")}
            errorMessage={errors.password?.message}
            color="secondary"
            isInvalid={!!errors.password}
          />

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              ¿Ya tienes cuenta?{" "}
              <Link
                className="underline hover:text-violet-500 transition-colors duration-300"
                href="/"
              >
                Iniciar sesión
              </Link>
            </p>

            <Button color="secondary" type="submit" isLoading={isSubmitting}>
              Registrarse
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
