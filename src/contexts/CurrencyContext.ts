import { createContext } from "react";
import {
  AvailableCurrencyCode,
  CurrencyData,
  sourceCurrency,
} from "../domain/Currency/models/Currency";

export interface CurrencyState {
  source: typeof sourceCurrency.code;
  active: AvailableCurrencyCode | null;
  changeCurrency: (currency: AvailableCurrencyCode) => void;
  data: CurrencyData | null;
  setCurrencyData: (data: CurrencyData) => void;
  resetCurrencyData: () => void;
}

export const initCurrencyState: CurrencyState = {
  source: sourceCurrency.code,
  active: null,
  changeCurrency: () => {},
  data: null,
  setCurrencyData: () => {},
  resetCurrencyData: () => {},
};

const CurrencyContext = createContext<CurrencyState>(initCurrencyState);

export default CurrencyContext;
