import React, { FunctionComponent } from "react";
import WizardProps from "../../../domain/Wizard/Wizard";
import WizardTemplate from "../../../templates/WizardTemplate";

const IncomeManagerWizard: FunctionComponent<WizardProps> = ({ isActive }) => {
  return <WizardTemplate isActive>Income wizard</WizardTemplate>;
};

export default IncomeManagerWizard;
