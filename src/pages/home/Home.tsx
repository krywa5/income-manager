import React, { FunctionComponent, useContext } from "react";
import CurrencyWizard from "../../components/organisms/currency-wizard/CurrencyWizard";
import IncomeManagerWizard from "../../components/organisms/income-manager-wizard/IncomeManagerWizard";
import AppContext from "../../contexts/AppContext";
import DefaultTemplate from "../../templates/DefaultTemplate";

const Home: FunctionComponent = () => {
  const { wizard } = useContext(AppContext);
  const activeWizard = wizard.active;

  const isCurrencySelectWizardActive = activeWizard === "currency-select";
  const isManagerWizardActive = activeWizard === "manager";

  return (
    <DefaultTemplate>
      {isCurrencySelectWizardActive && (
        <CurrencyWizard isActive={activeWizard === "currency-select"} />
      )}
      {isManagerWizardActive && (
        <IncomeManagerWizard isActive={activeWizard === "manager"} />
      )}
    </DefaultTemplate>
  );
};

export default Home;
