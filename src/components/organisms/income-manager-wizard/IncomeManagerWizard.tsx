import React, { FunctionComponent } from "react";
import WizardTemplate from "../../../templates/WizardTemplate";
import ActiveCurrency from "../../molecules/active-currency/ActiveCurrency";
import IncomeForm from "./form/IncomeForm";

const IncomeManagerWizard: FunctionComponent = () => {
  return (
    <WizardTemplate>
      <ActiveCurrency />
      <IncomeForm />
    </WizardTemplate>
  );
};

export default IncomeManagerWizard;
