import { createContext } from "react";
import { Wizard } from "../domain/Wizard/Wizard";

export interface WizardState {
  active: Wizard;
  changeWizard: (wizard: Wizard) => void;
}

export const initWizardState: WizardState = {
  active: "currency-select",
  changeWizard: () => {},
};

const WizardContext = createContext<WizardState>(initWizardState);

export default WizardContext;
