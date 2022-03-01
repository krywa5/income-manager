import { createContext } from "react";
import {
  AvailableCurrencyCode,
  CurrencyData,
} from "../domain/Currency/models/Currency";

export interface CurrencyState {
  source: string;
  active: AvailableCurrencyCode | null;
  changeCurrency: (currency: AvailableCurrencyCode) => void;
  data: CurrencyData | null;
  setCurrencyData: (data: CurrencyData) => void;
}

export const initCurrencyState: CurrencyState = {
  source: "PLN",
  active: null,
  changeCurrency: () => {},
  data: null,
  setCurrencyData: () => {},
};

const CurrencyContext = createContext<CurrencyState>(initCurrencyState);

export default CurrencyContext;
