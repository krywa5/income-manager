import { createContext } from "react";
import GuidString from "../domain/GuidString";
import Income from "../domain/Income/Income";

export interface IncomesState {
  incomes: Income[];
  addIncome: (income: Income) => void;
  removeIncome: (incomeId: GuidString) => void;
}

export const initIncomesState: IncomesState = {
  incomes: [],
  addIncome: () => {},
  removeIncome: () => {},
};

const IncomeContext = createContext<IncomesState>(initIncomesState);

export default IncomeContext;
