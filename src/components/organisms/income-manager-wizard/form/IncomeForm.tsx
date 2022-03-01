import { InputAdornment, styled } from "@mui/material";
import { useFormik } from "formik";
import { isEmpty } from "lodash";
import React, {
  ChangeEvent,
  FunctionComponent,
  useContext,
  useState,
} from "react";
import CurrencyContext from "../../../../contexts/CurrencyContext";
import GetCurrencyData from "../../../../domain/Currency/queries/GetCurrencyData";
import {
  formatCurrencyValue,
  formatIncome,
  getCurrencySymbol,
} from "../../../../domain/Currency/utils/currencyUtils";
import AutoInputField from "../../../atoms/auto-input-field/AutoInputField";
import FormBar from "../../../atoms/form-bar/FormBar";
import HorizontalDivider from "../../../atoms/horizontal-divider/HorizontalDivider";
import TextField from "../../../atoms/textfield/TextField";
import incomeManagerValidation from "./validation/income.validation";

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
});

const InputsContainer = styled("div")({
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "space-between",
});

const IncomeForm: FunctionComponent = () => {
  const {
    active: activeCurrency,
    source: sourceCurrency,
    setCurrencyData,
    data: currencyData,
  } = useContext(CurrencyContext);
  const [currencyValue, setCurrencyValue] = useState(0);

  const formik = useFormik({
    initialValues: {
      income: "",
      date: "",
    },
    validateOnChange: true,
    validationSchema: incomeManagerValidation,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
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
            value={formatIncome(Number(formik.values.income))}
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
            }}
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
      </StyledForm>
      <AutoInputField
        label={`Średni kurs waluty (${activeCurrency})`}
        labelHelper={currencyData?.rates[0].no}
        inputComponent={
          <TextField
            value={formatCurrencyValue(currencyValue)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">{sourceCurrency}</InputAdornment>
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
            value={formatIncome(currencyValue * Number(formik.values.income))}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">{sourceCurrency}</InputAdornment>
              ),
            }}
            type="number"
            inputProps={{
              step: 0.001,
            }}
          />
        }
      />
    </>
  );
};

export default IncomeForm;
