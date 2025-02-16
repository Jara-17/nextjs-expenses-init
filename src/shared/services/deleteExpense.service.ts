import { ExpenseBlockProps } from "../types/Expenses";
import { getToken } from "../utils";

export const deleteExpense = async (id: ExpenseBlockProps["id"]) => {
  const token = getToken();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/expenses/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Error al eliminar los gastos");
  }

  await response.json();
};
