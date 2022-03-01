import { ThemeProvider } from "@mui/material/styles";
import React, { FunctionComponent, useState } from "react";
import CurrencyContext, {
  CurrencyState,
  initCurrencyState,
} from "./contexts/CurrencyContext";
import WizardContext, {
  initWizardState,
  WizardState,
} from "./contexts/WizardContext";
import {
  AvailableCurrencyCode,
  CurrencyData,
} from "./domain/Currency/models/Currency";
import { Wizard } from "./domain/Wizard/Wizard";
import AppRouting from "./routes/Routing";
import "./theme/reset.css";
import Theme from "./theme/Theme";

const App: FunctionComponent = () => {
  const [activeWizard, setActiveWizard] = useState(initWizardState.active);
  const [activeCurrency, setActiveCurrency] = useState(
    initCurrencyState.active
  );
  const [currencyData, setCurrencyData] = useState(initCurrencyState.data);

  const changeActiveWizard = (wizard: Wizard) => setActiveWizard(wizard);
  const changeActiveCurrency = (currency: AvailableCurrencyCode) =>
    setActiveCurrency(currency);
  const changeCurrencyData = (data: CurrencyData) => setCurrencyData(data);

  const currencyContextValue: CurrencyState = {
    source: initCurrencyState.source,
    active: activeCurrency,
    changeCurrency: changeActiveCurrency,
    data: currencyData,
    setCurrencyData: changeCurrencyData,
  };

  const wizardContextValue: WizardState = {
    active: activeWizard,
    changeWizard: changeActiveWizard,
  };

  return (
    <ThemeProvider theme={Theme}>
      <CurrencyContext.Provider value={currencyContextValue}>
        <WizardContext.Provider value={wizardContextValue}>
          <AppRouting />
        </WizardContext.Provider>
      </CurrencyContext.Provider>
    </ThemeProvider>
  );
};

export default App;
