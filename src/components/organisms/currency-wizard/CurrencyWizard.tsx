import React, { FunctionComponent } from "react";
import WizardProps from "../../../domain/Wizard/Wizard";
import WizardTemplate from "../../../templates/WizardTemplate";
import CurrencyForm from "../../molecules/currency-form/CurrencyForm";

const CurrencyWizard: FunctionComponent<WizardProps> = ({ isActive }) => {
  return (
    <WizardTemplate isActive={isActive}>
      <CurrencyForm />
    </WizardTemplate>
  );
};

export default CurrencyWizard;
