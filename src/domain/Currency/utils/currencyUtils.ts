import { capitalize } from "lodash";
import { availableCurrencies, AvailableCurrencyCode } from "../models/Currency";

export const formatCurrencyForSelect = (title: string, symbol: string) =>
  `${capitalize(title)} [${symbol}]`;

export const getCurrencySymbol = (code: AvailableCurrencyCode): string =>
  availableCurrencies.find((currency) => currency.code === code)
    ? availableCurrencies.find((currency) => currency.code === code)!.symbol
    : "";

export const formatIncome = (income: number) => income.toFixed(2);

export const formatCurrencyValue = (currencyValue: number) =>
  currencyValue.toFixed(4);
