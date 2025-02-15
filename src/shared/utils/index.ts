export type Currency =
  | "USD"
  | "EUR"
  | "GBP"
  | "JPY"
  | "MXN"
  | "ARS"
  | "COP"
  | "BRL";
export type Locale = "en-US" | "es-ES" | "fr-FR" | "de-DE" | "ja-JP" | "pt-BR";

export function formatCurrency(
  amount: number,
  locale: Locale = "es-ES",
  currency: Currency = "EUR"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export const getToken = () => {
  return localStorage.getItem("token");
};
