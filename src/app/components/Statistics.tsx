import { ExpenseBlockProps } from "@/shared/types/Expenses";
import { formatCurrency } from "@/shared/utils";
import React from "react";

type StatisticsProps = {
  expenses: ExpenseBlockProps[];
};

export default function Statistics({ expenses }: StatisticsProps) {
  const totalIncome = expenses
    .filter((expense) => expense.type === "income")
    .reduce((acc, expense) => acc + Number(expense.amount), 0);

  const totalExpenses = expenses
    .filter((expense) => expense.type === "expense")
    .reduce((acc, expense) => acc + Number(expense.amount), 0);

  return (
    <article className="mt-8 flex flex-col gap-4 md:flex-row justify-between border-b border-gray-700 p-6">
      <div className="flex flex-col items-center md:items-start mt-6 md:mt-0">
        <p className="text-lg text-gray-400">Total Gastos</p>
        <p className="text-4xl font-medium text-red-500">
          {formatCurrency(totalExpenses, "es-ES", "EUR")}
        </p>
      </div>

      <div className="flex flex-col items-center md:items-end">
        <p className="text-lg text-gray-400">Total Ingresos</p>
        <p className="text-4xl font-medium text-green-500">
          {formatCurrency(totalIncome, "es-ES", "EUR")}
        </p>
      </div>
    </article>
  );
}
