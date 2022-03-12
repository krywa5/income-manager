import React, { FunctionComponent } from "react";
import IncomeList from "./components/list/IncomeList";
import IncomeForm from "./components/form/IncomeForm";

const IncomeManager: FunctionComponent = () => {
  return (
    <>
      <IncomeForm />
      <IncomeList />
    </>
  );
};

export default IncomeManager;
