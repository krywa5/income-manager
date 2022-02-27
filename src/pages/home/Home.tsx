import React, { FunctionComponent, useContext } from "react";
import CurrencyWizard from "../../components/organisms/currency-wizard/CurrencyWizard";
import IncomeManagerWizard from "../../components/organisms/income-manager-wizard/IncomeManagerWizard";
import WizardContext from "../../contexts/WizardContext";
import DefaultTemplate from "../../templates/DefaultTemplate";

const Home: FunctionComponent = () => {
  const { active: activeWizard } = useContext(WizardContext);

  const isCurrencySelectWizardActive = activeWizard === "currency-select";
  const isManagerWizardActive = activeWizard === "manager";

  return (
    <DefaultTemplate>
      {isCurrencySelectWizardActive && <CurrencyWizard />}
      {isManagerWizardActive && <IncomeManagerWizard />}
    </DefaultTemplate>
  );
};

export default Home;
