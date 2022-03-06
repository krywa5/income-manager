import React, { FunctionComponent } from "react";
import ActiveCurrency from "../../molecules/active-currency/ActiveCurrency";
import IncomeList from "./components/list/IncomeList";
import IncomeForm from "./components/form/IncomeForm";

const IncomeManager: FunctionComponent = () => {
  return (
    <>
      <ActiveCurrency />
      <IncomeForm />
      <IncomeList />
    </>
  );
};

export default IncomeManager;
