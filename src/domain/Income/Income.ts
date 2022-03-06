import { Guid } from "guid-typescript";
import GuidString from "../GuidString";

interface Income {
  id: GuidString;
  date: Date;
  table: string;
  currencyValue: number;
  abroadIncome: number;
  sourceIncome: number;
}

export const createIncome = ({
  date,
  table,
  currencyValue,
  abroadIncome,
  sourceIncome,
}: Omit<Income, "id">): Income => {
  return {
    id: Guid.create().toString(),
    date,
    table,
    currencyValue,
    abroadIncome,
    sourceIncome,
  };
};

export default Income;
