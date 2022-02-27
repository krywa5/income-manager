import { createContext } from "react";
import { AvailableCurrencyCode } from "../domain/Currency/models/Currency";

export interface CurrencyState {
  active: AvailableCurrencyCode | null;
  changeCurrency: (currency: AvailableCurrencyCode) => void;
}

export const initCurrencyState: CurrencyState = {
  active: null,
  changeCurrency: () => {},
};

const CurrencyContext = createContext<CurrencyState>(initCurrencyState);

export default CurrencyContext;
