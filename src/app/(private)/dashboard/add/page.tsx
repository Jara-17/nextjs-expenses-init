"use client";

import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { getToken } from "@/shared/utils";

// Definir el esquema de validación con Zod
const formSchema = z.object({
  amount: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "La cantidad debe ser mayor que 0",
  }),
  type: z.enum(["expense", "income"], {
    required_error: "Selecciona un tipo",
  }),
  description: z.string().min(1, "La descripción es requerida"),
});

type FormData = z.infer<typeof formSchema>;

export default function AddExpenses() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
      type: undefined,
      description: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const token = getToken();
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/expenses`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            amount: parseFloat(data.amount),
            type: data.type,
            description: data.description,
          }),
        }
      );

      if (response.ok) {
        reset();
        toast.success("Datos Guardados Correctamente!");
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error al guardar:", error);
      toast.error(`Error al guardar: ${error}`);
    }
  };

  return (
    <div
      className="
        max-w-md 
        mx-auto 
        p-8 
        text-white 
        my-10 
        bg-gray-900 
        rounded-lg
        border
        border-blue-500
        shadow-md
        shadow-blue-500
      "
    >
      <h1 className="text-2xl font-bold mb-8 text-blue-500">
        Añadir Movimiento
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-white">
        <Input
          type="number"
          label="Cantidad (€)"
          placeholder="0.00"
          color="primary"
          variant="bordered"
          isInvalid={!!errors.amount}
          errorMessage={errors.amount?.message}
          {...register("amount")}
        />

        <Controller
          name="type"
          control={control}
          render={({ field }) => (
            <Select
              label="Tipo"
              placeholder="Selecciona el tipo"
              color="primary"
              variant="bordered"
              isInvalid={!!errors.type}
              errorMessage={errors.type?.message}
              selectedKeys={field.value ? [field.value] : []} // Se asegura que el valor seleccionado se mantenga
              onSelectionChange={(keys) => field.onChange(Array.from(keys)[0])} // Actualiza el valor correctamente
            >
              <SelectItem key="expense" value="expense">
                Gasto
              </SelectItem>
              <SelectItem key="income" value="income">
                Ingreso
              </SelectItem>
            </Select>
          )}
        />

        <Textarea
          label="Descripción"
          placeholder="Describe el movimiento"
          color="primary"
          variant="bordered"
          isInvalid={!!errors.description}
          errorMessage={errors.description?.message}
          {...register("description")}
        />

        <Button
          type="submit"
          color="primary"
          variant="ghost"
          className="w-full"
        >
          Guardar
        </Button>
      </form>
    </div>
  );
}
