export const formatCurrency = (value: number): string => {
  const formattedValue = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    currencyDisplay: "symbol",
  }).format(value);

  return formattedValue.replace("$", "$ ");
};
