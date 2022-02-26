import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  useTheme,
} from "@mui/material";
import React, { FunctionComponent, useContext, useState } from "react";
import AppContext from "../../../contexts/AppContext";
import {
  availableCurrencies,
  AvailableCurrencyCode,
} from "../../../domain/Currency/models/Currency";
import { formatCurrencyForSelect } from "../../../domain/Currency/utils/currencyUtils";

const CurrencyForm: FunctionComponent = () => {
  const [currency, setCurrency] = useState<AvailableCurrencyCode | "">("");
  const context = useContext(AppContext);
  const { spacing } = useTheme();
  console.log({ context });
  const formId = "currency-select";

  const handleChange = (e: SelectChangeEvent) =>
    setCurrency(e.target.value as AvailableCurrencyCode);

  const handleClick = () => {
    console.log("submit");
  };

  return (
    <>
      <Typography
        variant="h6"
        sx={{
          mb: spacing(2),
          alignSelf: "center",
        }}
      >
        Wybierz walutę
      </Typography>

      <FormControl fullWidth>
        <InputLabel id={formId}>Waluta</InputLabel>
        <Select
          label="Waluta"
          id={formId}
          onChange={handleChange}
          value={currency}
        >
          {availableCurrencies.map(({ code, title, symbol }) => (
            <MenuItem value={code}>
              {formatCurrencyForSelect(title, symbol)}
            </MenuItem>
          ))}
        </Select>
        <Button
          type="submit"
          sx={{
            mt: spacing(3),
          }}
          variant="contained"
          color="secondary"
          disabled={!currency}
          onClick={handleClick}
        >
          Dalej
        </Button>
      </FormControl>
    </>
  );
};

export default CurrencyForm;
