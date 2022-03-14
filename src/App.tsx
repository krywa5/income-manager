import { ThemeProvider } from "@mui/material/styles";
import React, { FunctionComponent, useState } from "react";
import { ToastContainer } from "react-toastify";
import CurrencyContext, {
  CurrencyState,
  initCurrencyState,
} from "./contexts/CurrencyContext";
import IncomesContext, {
  IncomesState,
  initIncomesState,
} from "./contexts/IncomesContext";
import WizardContext, {
  initWizardState,
  WizardState,
} from "./contexts/WizardContext";
import {
  AvailableCurrencyCode,
  CurrencyData,
} from "./domain/Currency/models/Currency";
import GuidString from "./domain/GuidString";
import Income from "./domain/Income/Income";
import { Wizard } from "./domain/Wizard/Wizard";
import "./theme/reset.css";
import Theme from "./theme/Theme";
import "react-toastify/dist/ReactToastify.css";
import "./theme/print.css";
import Home from "./pages/home/Home";

const App: FunctionComponent = () => {
  const [activeWizard, setActiveWizard] = useState(initWizardState.active);
  const [activeCurrency, setActiveCurrency] = useState(
    initCurrencyState.active
  );
  const [currencyData, setCurrencyData] = useState(initCurrencyState.data);
  const [incomes, setIncomes] = useState(initIncomesState.incomes);

  const changeActiveWizard = (wizard: Wizard) => setActiveWizard(wizard);
  const changeActiveCurrency = (currency: AvailableCurrencyCode) =>
    setActiveCurrency(currency);
  const changeCurrencyData = (data: CurrencyData) => setCurrencyData(data);
  const resetCurrencyData = () => setCurrencyData(null);

  const addIncome = (income: Income) =>
    setIncomes((currentList) => [...currentList, income]);

  const removeIncome = (incomeId: GuidString) => {
    console.log(`Remove item: ${incomeId}`);

    setIncomes((currentList) =>
      currentList.filter(({ id }) => id !== incomeId)
    );
  };

  const currencyContextValue: CurrencyState = {
    source: initCurrencyState.source,
    active: activeCurrency,
    changeCurrency: changeActiveCurrency,
    data: currencyData,
    setCurrencyData: changeCurrencyData,
    resetCurrencyData,
  };

  const wizardContextValue: WizardState = {
    active: activeWizard,
    changeWizard: changeActiveWizard,
  };

  const incomesContextValue: IncomesState = {
    incomes,
    addIncome,
    removeIncome,
  };

  return (
    <ThemeProvider theme={Theme}>
      <IncomesContext.Provider value={incomesContextValue}>
        <CurrencyContext.Provider value={currencyContextValue}>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <WizardContext.Provider value={wizardContextValue}>
            <Home />
          </WizardContext.Provider>
        </CurrencyContext.Provider>
      </IncomesContext.Provider>
    </ThemeProvider>
  );
};

export default App;
