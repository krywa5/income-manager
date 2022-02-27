import React, { FunctionComponent } from "react";
import ActiveCurrency from "../../molecules/active-currency/ActiveCurrency";
import IncomeForm from "./form/IncomeForm";

const IncomeManager: FunctionComponent = () => {
  return (
    <>
      <ActiveCurrency />
      <IncomeForm />
    </>
  );
};

export default IncomeManager;
