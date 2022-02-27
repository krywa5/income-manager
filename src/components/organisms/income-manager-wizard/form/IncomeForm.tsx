import { InputAdornment, styled } from "@mui/material";
import { useFormik } from "formik";
import { isEmpty } from "lodash";
import React, {
  ChangeEventHandler,
  FunctionComponent,
  useContext,
  useState,
} from "react";
import CurrencyContext from "../../../../contexts/CurrencyContext";
import { getCurrencySymbol } from "../../../../domain/Currency/utils/currencyUtils";
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
  const { active: activeCurrency, source: sourceCurrency } =
    useContext(CurrencyContext);
  const [currencyValue, setCurrencyValue] = useState(0);
  const [currencyTable, setCurrencyTable] = useState("");
  const [currencyDate, setCurrencyDate] = useState("");

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

  const fetchCurrencyData = () => {
    console.log("fetching currency data...");
  };

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
            value={formik.values.income}
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
      {/* <FormBar /> */}
      <AutoInputField
        label={`Średni kurs waluty (${activeCurrency})`}
        labelHelper="lorem ipsum"
        inputComponent={
          <TextField
            value={currencyValue}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">{sourceCurrency}</InputAdornment>
              ),
            }}
          />
        }
      />
      <AutoInputField
        label="Wartość przychodu"
        inputComponent={
          <TextField
            value={currencyValue * Number(formik.values.income)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">{sourceCurrency}</InputAdornment>
              ),
            }}
          />
        }
      />
    </>
  );
};

export default IncomeForm;
