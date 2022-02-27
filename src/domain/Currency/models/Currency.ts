export type AvailableCurrencyCode = "USD" | "EUR";

interface CurrencyBase {
  code: AvailableCurrencyCode; // [USD]
  symbol: string; // [$]
  title: string; // [dolar]
}

export const sourceCurrency = {
  code: "PLN",
  symbol: "zł",
  title: "Złoty",
};

export const availableCurrencies: CurrencyBase[] = [
  {
    code: "USD",
    symbol: "$",
    title: "dolar amerykański",
  },
  {
    code: "EUR",
    symbol: "€",
    title: "euro",
  },
];

export const availableCurrenciesCodes = availableCurrencies.map(
  ({ code }) => code
);
