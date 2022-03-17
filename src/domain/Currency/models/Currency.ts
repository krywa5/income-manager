export type AvailableCurrencyCode =
  | "USD"
  | "EUR"
  | "GBP"
  | "NOK"
  | "SEK"
  | "CAD"
  | "CHF"
  | "UAH"
  | "JPY";

interface CurrencyBase {
  code: AvailableCurrencyCode; // [USD]
  symbol: string; // [$]
  title: string; // [dolar]
}

export const sourceCurrency = {
  code: "PLN",
  symbol: "zł",
  title: "Złoty",
} as const;

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
  {
    code: "GBP",
    symbol: "£",
    title: "funt szterling",
  },
  {
    code: "NOK",
    symbol: "kr",
    title: "korona norweska",
  },
  {
    code: "SEK",
    symbol: "kr",
    title: "korona szwecka",
  },
  {
    code: "CAD",
    symbol: "$",
    title: "dolar kanadyjski",
  },
  {
    code: "CHF",
    symbol: "CHF",
    title: "frank szwajcarski",
  },
  {
    code: "UAH",
    symbol: "₴",
    title: "hrywna ukraińska",
  },
  {
    code: "JPY",
    symbol: "¥",
    title: "jen japoński",
  },
];

export const availableCurrenciesCodes = availableCurrencies.map(
  ({ code }) => code
);

interface Rate {
  effectiveDate: string;
  mid: number;
  no: string;
}
export interface CurrencyData {
  code: AvailableCurrencyCode;
  currency: string;
  rates: Rate[];
}
