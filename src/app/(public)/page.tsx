"use client";
import { authSchema, AuthSchema } from "@/shared/schemas/auth.schema";
import { loginService } from "@/shared/services/login.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function Login() {
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
      const responseData = await loginService(dataForm);

      if (responseData.token) {
        localStorage.setItem("token", responseData.token);
        router.push("/dashboard");
      } else {
        throw new Error("No se recibió un token");
      }
    } catch (error) {
      console.log(error);
      // TODO: Manejar el error con un toast por ejemplo
      alert(error);
    }
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-4xl text-white">
          Gestión de ingresos y gastos
        </h1>
      </div>

      <div
        className=" 
        bg-gray-900 
          p-10
          rounded-lg 
          shadow-md
          shadow-blue-500
          border
          border-blue-500
          text-white
          max-w-md 
          mx-auto 
          mb-0 
          mt-8 
          space-y-4 
        "
      >
        <h2 className="font-bold text-blue-500 text-xl mb-8">Iniciar sesión</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="
          space-y-4 
        "
        >
          <Input
            label="Email"
            type="email"
            variant="bordered"
            {...register("email")}
            errorMessage={errors.email?.message}
            isInvalid={!!errors.email}
            color="primary"
          />

          <Input
            label="Contraseña"
            type="password"
            variant="bordered"
            {...register("password")}
            errorMessage={errors.password?.message}
            isInvalid={!!errors.password}
            color="primary"
          />

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              No tienes cuenta?{" "}
              <Link
                className="underline hover:text-blue-500 transition-colors duration-300"
                href="/register"
              >
                Registrate
              </Link>
            </p>

            <Button color="primary" type="submit" isLoading={isSubmitting}>
              Iniciar sesión
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
