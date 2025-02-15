"use client";

import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-toastify";
import { getToken } from "@/shared/utils";
import { ExpenseBlockProps } from "@/shared/types/Expenses";
import { useEffect } from "react";

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

type UpdateExpenseProps = {
  expense: ExpenseBlockProps | null;
  onClose: () => void;
  refreshExpenses: () => void;
};

export default function UpdateExpenses({
  expense,
  onClose,
  refreshExpenses,
}: UpdateExpenseProps) {
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

  useEffect(() => {
    if (expense) {
      reset({
        amount: String(expense.amount),
        type: expense.type,
        description: expense.description,
      });
    }
  }, [expense, reset]);

  const onSubmit = async (data: FormData) => {
    try {
      const token = getToken();
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/expenses/${expense?.id}`,
        {
          method: "PUT",
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
        toast.success("Datos actualizados correctamente!");
        onClose();
        refreshExpenses();
      }
    } catch (error) {
      console.error("Error al actualizar:", error);
      toast.error(`Error al actualizar: ${error}`);
    }
  };

  return (
    <>
      <div className="space-y-4 text-white my-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                selectedKeys={field.value ? [field.value] : []}
                onSelectionChange={(keys) =>
                  field.onChange(Array.from(keys)[0])
                }
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
            Actualizar
          </Button>
        </form>
      </div>
    </>
  );
}
