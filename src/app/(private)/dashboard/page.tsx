"use client";

import ExpenseBlock from "@/app/components/expenses";
import { getExpensesService } from "@/shared/services/getExpenses.service";
import { ExpenseBlockProps } from "@/shared/types/Expenses";
import { useEffect, useMemo, useState } from "react";

export default function Dashboard() {
  const [expenses, setExpenses] = useState<ExpenseBlockProps[]>([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const resultData = await getExpensesService();

        setExpenses(resultData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchExpenses();
  }, []);

  const total = useMemo(() => {
    return expenses.reduce((acc, expense) => {
      const amount = Number(expense.amount);
      if (isNaN(amount)) {
        return acc;
      }

      return expense.type === "income" ? acc + amount : acc - amount;
    }, 0);
  }, [expenses]);

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-6">
        <article className="mt-8 flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
          <div>
            <p className="text-sm text-gray-500">Total ingresos menos gastos</p>
            <p className="text-2xl font-medium text-gray-900">{total}€</p>
          </div>
        </article>

        <div className="flex flex-col gap-4 mt-8">
          {expenses.map((expense) => (
            <ExpenseBlock key={expense.id} {...expense} />
          ))}
        </div>
      </div>
    </>
  );
}
