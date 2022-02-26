import { createContext } from "react";
import { AvailableCurrencyCode } from "../domain/Currency/models/Currency";
import { Wizard } from "../domain/Wizard/Wizard";

interface AppState {
  wizard: {
    active: Wizard;
  };
  currency: {
    active: AvailableCurrencyCode | null;
  };
}

export const initAppState: AppState = {
  wizard: {
    active: "currency-select",
  },
  currency: {
    active: null,
  },
};

const AppContext = createContext<AppState>(initAppState);

export default AppContext;
