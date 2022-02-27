import React, { FunctionComponent } from "react";
import WizardTemplate from "../../../templates/WizardTemplate";
import IncomeManager from "./IncomeManager";

const IncomeManagerWizard: FunctionComponent = () => {
  return (
    <WizardTemplate>
      <IncomeManager />
    </WizardTemplate>
  );
};

export default IncomeManagerWizard;
