import { capitalize } from "lodash";
import {
  availableCurrencies,
  AvailableCurrencyCode,
  sourceCurrency,
} from "../models/Currency";

export const formatCurrencyForSelect = (title: string, symbol: string) =>
  `${capitalize(title)} (${symbol})`;

export const getCurrencySymbol = (code: AvailableCurrencyCode): string =>
  availableCurrencies.find((currency) => currency.code === code)
    ? availableCurrencies.find((currency) => currency.code === code)!.symbol
    : "";

export const formatIncome = (
  income: number,
  symbol?: AvailableCurrencyCode | typeof sourceCurrency["code"]
) => {
  const formatted = income.toLocaleString("pl-PL", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });

  if (symbol) {
    return `${formatted} ${symbol}`;
  }

  return formatted;
};

export const formatIncomeForInput = (income: number) => income.toFixed(2);

export const formatCurrencyValue = (currencyValue: number) =>
  currencyValue.toFixed(4);

export const formatCurrencyValueToPolishFormat = (currencyValue: number) =>
  formatCurrencyValue(currencyValue).replaceAll(".", ",");
