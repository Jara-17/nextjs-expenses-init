"use client";

import { ExpenseBlockProps } from "@/shared/types/Expenses";
import { formatCurrency } from "@/shared/utils";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import React from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { deleteExpense } from "@/shared/services/deleteExpense.service";
import { toast } from "react-toastify";

interface ExpenseBlockComponentProps extends ExpenseBlockProps {
  onEdit: (expense: ExpenseBlockProps) => void;
  onDelete: (id: ExpenseBlockProps["id"]) => void;
}

const ExpenseBlock: React.FC<ExpenseBlockComponentProps> = ({
  amount,
  type,
  description,
  id,
  onEdit,
  onDelete,
}) => {
  const onDeleteExpense = async () => {
    try {
      await deleteExpense(id);
      onDelete(id);
      toast.success(
        `${type === "income" ? "Ingreso" : "Gasto"} eliminado correctamente!`
      );
    } catch (error) {
      console.error("Error al eliminar el gasto:", error);
      toast.error("Error al eliminar el gasto");
    }
  };

  return (
    <article
      className={`flex items-center justify-between gap-4 rounded-lg border ${
        type === "income" ? "border-green-500" : "border-red-500"
      } bg-gray-900 p-6`}
    >
      <div className="flex items-center gap-4">
        <span
          className={`rounded-full p-3 ${
            type === "income" ? "bg-green-200" : "bg-red-200"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`size-8 ${
              type === "income" ? "text-green-500" : "text-red-500"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </span>

        <div>
          <p
            className={`text-2xl font-medium ${
              type === "income" ? "text-green-500" : "text-red-500"
            }`}
          >
            {formatCurrency(amount, "es-ES", "EUR")}
          </p>
          <p className="text-sm text-gray-300">
            {type === "income" ? "Ingreso" : "Gasto"}: {description}
          </p>
        </div>
      </div>

      <div>
        <Dropdown className="bg-gray-800 text-white">
          <DropdownTrigger>
            <EllipsisVerticalIcon
              className={`h-9 w-9 cursor-pointer ${
                type === "income" ? "text-green-500" : "text-red-500"
              }`}
              aria-hidden="true"
            />
          </DropdownTrigger>
          <DropdownMenu variant="bordered" color="primary">
            <DropdownItem
              key="edit"
              onPress={() => onEdit({ id, amount, type, description })}
            >
              Editar
            </DropdownItem>
            <DropdownItem
              key="delete"
              className="text-danger"
              color="danger"
              onPress={onDeleteExpense}
            >
              Eliminar
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </article>
  );
};

export default ExpenseBlock;
