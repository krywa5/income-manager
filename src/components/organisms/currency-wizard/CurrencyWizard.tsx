import React, { FunctionComponent } from "react";
import WizardTemplate from "../../../templates/WizardTemplate";
import CurrencyForm from "../../molecules/currency-form/CurrencyForm";

const CurrencyWizard: FunctionComponent = () => {
  return (
    <WizardTemplate>
      <CurrencyForm />
    </WizardTemplate>
  );
};

export default CurrencyWizard;
