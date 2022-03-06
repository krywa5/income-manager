import { Button, InputAdornment, styled } from "@mui/material";
import { FormikHelpers, useFormik } from "formik";
import { Guid } from "guid-typescript";
import { isEmpty } from "lodash";
import React, {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from "react";
import CurrencyContext from "../../../../../contexts/CurrencyContext";
import IncomesContext from "../../../../../contexts/IncomesContext";
import GetCurrencyData from "../../../../../domain/Currency/queries/GetCurrencyData";
import {
  formatCurrencyValue,
  formatIncome,
  formatIncomeForInput,
  getCurrencySymbol,
} from "../../../../../domain/Currency/utils/currencyUtils";
import Income, { createIncome } from "../../../../../domain/Income/Income";
import useComponentDidMount from "../../../../../hooks/useComponentDidMount";
import { formatResponseDateToLocale } from "../../../../../utils/utils";
import AutoInputField from "../../../../atoms/auto-input-field/AutoInputField";
import HorizontalDivider from "../../../../atoms/horizontal-divider/HorizontalDivider";
import TextField from "../../../../atoms/textfield/TextField";
import incomeManagerValidation from "./validation/income.validation";

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
});

const InputsContainer = styled("div")({
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "space-around",
});

interface ManualFormInputs {
  income: string;
  date: string;
}

interface ResetFormProps {
  resetFormikForm: () => void;
  resetCurrencyData: () => void;
  setCurrencyValue: (value: SetStateAction<number>) => void;
}

const resetForm = ({
  resetFormikForm,
  resetCurrencyData,
  setCurrencyValue,
}: ResetFormProps) => {
  resetFormikForm();
  resetCurrencyData();
  setCurrencyValue(0);
};

const IncomeForm: FunctionComponent = () => {
  const {
    active: activeCurrency,
    source: sourceCurrency,
    setCurrencyData,
    data: currencyData,
    resetCurrencyData,
  } = useContext(CurrencyContext);
  const { incomes, addIncome, removeIncome } = useContext(IncomesContext);
  const [currencyValue, setCurrencyValue] = useState<number>(0);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useComponentDidMount(() => firstInputRef.current?.focus());

  const handleFormSubmit = (
    values: ManualFormInputs,
    { resetForm: resetFormikForm }: FormikHelpers<ManualFormInputs>
  ) => {
    const income = createIncome({
      currencyValue,
      abroadIncome: Number(values.income),
      sourceIncome: currencyValue * Number(values.income),
      date: new Date(values.date),
      table: currencyData ? currencyData.rates[0].no : "table_error",
    });

    addIncome(income);

    resetForm({
      resetFormikForm,
      resetCurrencyData,
      setCurrencyValue,
    });

    firstInputRef.current?.focus();
  };

  const formik = useFormik<ManualFormInputs>({
    initialValues: {
      income: "10000",
      date: "2020-03-04",
    },
    validateOnChange: true,
    validationSchema: incomeManagerValidation,
    onSubmit: handleFormSubmit,
  });

  const fetchCurrencyData = async () => {
    if (!activeCurrency) {
      return console.error("No active currency");
    }

    const response = await GetCurrencyData(
      activeCurrency,
      new Date(formik.values.date)
    );

    if (response) {
      setCurrencyData(response);
      setCurrencyValue(response.rates[0].mid);
    }
  };

  const handleFetchedCurrencyInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setCurrencyValue(Number(e.target.value));

  return (
    <>
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit(e);
        }}
      >
        <InputsContainer>
          <TextField
            id="income"
            type="number"
            name="income"
            label="Przychód"
            value={Number(formik.values.income)}
            onChange={formik.handleChange}
            error={formik.touched.income && Boolean(formik.errors.income)}
            helperText={formik.touched.income && formik.errors.income}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {getCurrencySymbol(activeCurrency!)}
                </InputAdornment>
              ),
            }}
            inputProps={{
              min: 0,
              step: 0.01,
            }}
            inputRef={firstInputRef}
          />
          <TextField
            id="date"
            name="date"
            type="date"
            label="Data"
            value={formik.values.date}
            onChange={formik.handleChange}
            error={formik.touched.date && Boolean(formik.errors.date)}
            helperText={formik.touched.date && formik.errors.date}
            InputLabelProps={{
              shrink: true,
            }}
            onBlur={() =>
              formik.validateForm().then((res) => {
                if (isEmpty(res)) {
                  fetchCurrencyData();
                }
              })
            }
          />
        </InputsContainer>
        <HorizontalDivider />
        <AutoInputField
          label={`Średni kurs waluty (${activeCurrency})`}
          labelHelpers={
            currencyData
              ? [
                  `${
                    currencyData.rates[0].no
                  }, z dn. ${formatResponseDateToLocale(
                    currencyData.rates[0].effectiveDate
                  )}`,
                ]
              : []
          }
          inputComponent={
            <TextField
              value={formatCurrencyValue(currencyValue)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {sourceCurrency}
                  </InputAdornment>
                ),
              }}
              type="number"
              inputProps={{
                step: 0.0001,
                min: 0,
              }}
              onChange={handleFetchedCurrencyInputChange}
            />
          }
        />
        <AutoInputField
          label="Wartość przychodu"
          inputComponent={
            <TextField
              value={formatIncomeForInput(
                currencyValue * Number(formik.values.income)
              )}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {sourceCurrency}
                  </InputAdornment>
                ),
              }}
              type="number"
              inputProps={{
                step: 0.001,
              }}
            />
          }
        />
        <Button
          type="submit"
          color="secondary"
          sx={{
            mb: 1,
            mt: 2,
          }}
          disabled={
            !currencyValue || !formik.values.date || !formik.values.income
          }
          variant="contained"
          size="large"
        >
          Dodaj przychód do listy
        </Button>
      </StyledForm>
    </>
  );
};

export default IncomeForm;
