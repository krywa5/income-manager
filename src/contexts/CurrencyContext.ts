import { createContext } from "react";
import { AvailableCurrencyCode } from "../domain/Currency/models/Currency";

export interface CurrencyState {
  source: string;
  active: AvailableCurrencyCode | null;
  changeCurrency: (currency: AvailableCurrencyCode) => void;
}

export const initCurrencyState: CurrencyState = {
  source: "PLN",
  active: null,
  changeCurrency: () => {},
};

const CurrencyContext = createContext<CurrencyState>(initCurrencyState);

export default CurrencyContext;
