"use client";

import ExpenseBlock from "@/app/components/expense-block";
import { getExpensesService } from "@/shared/services/getExpenses.service";
import { ExpenseBlockProps } from "@/shared/types/Expenses";
import { formatCurrency } from "@/shared/utils";
import { useEffect, useMemo, useState } from "react";

export default function Dashboard() {
  const [expenses, setExpenses] = useState<ExpenseBlockProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        setIsLoading(true);
        // Por ahora, usamos datos mockeados
        // Con la API, reemplaza esto con el fetch real
        const resultData = await getExpensesService();

        setExpenses(resultData);
      } catch (err) {
        setError("Error al cargar los gastos");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  // Calcular el total usando useMemo
  const total = useMemo(() => {
    return expenses.reduce((acc, expense) => {
      // Convertir amount a número y verificar que sea válido
      const amount = Number(expense.amount);
      if (isNaN(amount)) return acc;

      return expense.type === "income" ? acc + amount : acc - amount;
    }, 0);
  }, [expenses]);

  if (isLoading) {
    return (
      <div className="max-w-screen-xl mx-auto px-6 text-gray-400">
        <p>Cargando gastos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-screen-xl mx-auto px-6">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-6">
      <article
        className="
          mt-8 
          flex 
          items-end 
          justify-between 
          rounded-lg 
          border 
          border-violet-900 
          shadow-md
          shadow-violet-900
          p-6
        "
      >
        <div>
          <p className="text-sm text-gray-400">Total ingresos menos gastos</p>
          <p className="text-2xl font-medium text-violet-900">
            {formatCurrency(total, "es-ES", "EUR")}
          </p>
        </div>
      </article>

      <div className="flex flex-col gap-4 py-8">
        {expenses.map((expense) => (
          <ExpenseBlock key={expense.id} {...expense} />
        ))}
      </div>
    </div>
  );
}
