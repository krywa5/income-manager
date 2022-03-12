import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { FunctionComponent, useContext } from "react";
import { toast } from "react-toastify";
import CurrencyContext from "../../../../../contexts/CurrencyContext";
import IncomeContext from "../../../../../contexts/IncomesContext";
import {
  formatCurrencyValueToPolishFormat,
  formatIncome,
} from "../../../../../domain/Currency/utils/currencyUtils";
import {
  formatDate,
  formatResponseDateToLocale,
} from "../../../../../utils/utils";
import NonPrintable from "../../../../atoms/non-printable/NonPrintable";
import ListItemDeleteButton from "./components/ListItemDeleteButton";

const IncomeList: FunctionComponent = () => {
  const { active: activeCurrency, source: sourceCurrency } =
    useContext(CurrencyContext);
  const { incomes, removeIncome } = useContext(IncomeContext);

  const getIncomesSum = (type: "sourceIncome" | "abroadIncome") =>
    incomes.reduce((acc: number, current) => {
      return acc + current[type];
    }, 0);

  return (
    <TableContainer
      component={Paper}
      sx={{
        marginTop: 2,
      }}
    >
      <Table sx={{ minWidth: 800 }} aria-label="Income table">
        <TableHead>
          <TableRow>
            <TableCell>Lp.</TableCell>
            <TableCell align="center">Data wpłaty</TableCell>
            <TableCell align="center">Tabela</TableCell>
            <TableCell align="center">Kurs waluty</TableCell>
            <TableCell align="right">Przychód {activeCurrency}</TableCell>
            <TableCell align="right">Przychód {sourceCurrency}</TableCell>
            <NonPrintable>
              <TableCell align="center"></TableCell>
            </NonPrintable>
          </TableRow>
        </TableHead>
        <TableBody>
          {incomes.map(
            (
              { id, date, table, currencyValue, abroadIncome, sourceIncome },
              idx
            ) => (
              <TableRow
                key={id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {idx + 1}.
                </TableCell>
                <TableCell align="center">
                  {formatResponseDateToLocale(formatDate(date))}
                </TableCell>
                <TableCell align="center">{table}</TableCell>
                <TableCell align="center">
                  {formatCurrencyValueToPolishFormat(currencyValue)}
                </TableCell>
                <TableCell align="right">
                  {formatIncome(abroadIncome)}
                </TableCell>
                <TableCell align="right">
                  {formatIncome(sourceIncome)}
                </TableCell>
                <NonPrintable>
                  <TableCell align="center" sx={{ minWidth: "unset" }}>
                    <ListItemDeleteButton
                      onClick={() => {
                        removeIncome(id);
                        toast.error("Usunięto pozycję z listy");
                      }}
                    />
                  </TableCell>
                </NonPrintable>
              </TableRow>
            )
          )}
          <TableRow>
            <TableCell align="center" />
            <TableCell align="center" />
            <TableCell align="center" />
            <TableCell align="right">
              <Typography variant="subtitle2">Łącznie:</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle2">
                {formatIncome(
                  getIncomesSum("abroadIncome"),
                  activeCurrency || undefined
                )}
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle2">
                {formatIncome(getIncomesSum("sourceIncome"), sourceCurrency)}
              </Typography>
            </TableCell>
            <NonPrintable>
              <TableCell align="center" />
            </NonPrintable>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IncomeList;
