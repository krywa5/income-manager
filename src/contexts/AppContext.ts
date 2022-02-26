import { createContext } from "react";
import { AvailableCurrencyCode } from "../domain/Currency/models/Currency";

type WizardStep = "currency-select" | "manager";

interface AppState {
  wizard: {
    active: WizardStep;
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
