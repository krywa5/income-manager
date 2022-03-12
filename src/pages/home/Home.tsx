import React, { FunctionComponent, useContext } from "react";
import PrintButton from "../../components/molecules/print-button/PrintButton";
import CurrencyWizard from "../../components/organisms/currency-wizard/CurrencyWizard";
import IncomeManagerWizard from "../../components/organisms/income-manager-wizard/IncomeManagerWizard";
import IncomeContext from "../../contexts/IncomesContext";
import WizardContext from "../../contexts/WizardContext";
import DefaultTemplate from "../../templates/DefaultTemplate";

const Home: FunctionComponent = () => {
  const { active: activeWizard } = useContext(WizardContext);
  const { incomes } = useContext(IncomeContext);

  const isCurrencySelectWizardActive = activeWizard === "currency-select";
  const isManagerWizardActive = activeWizard === "manager";

  return (
    <DefaultTemplate>
      {isCurrencySelectWizardActive && <CurrencyWizard />}
      {isManagerWizardActive && <IncomeManagerWizard />}
      {!!incomes.length && <PrintButton />}
    </DefaultTemplate>
  );
};

export default Home;
