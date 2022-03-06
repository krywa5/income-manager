import { styled, Typography, useTheme } from "@mui/material";
import React, { FunctionComponent, useContext } from "react";
import CurrencyContext from "../../../contexts/CurrencyContext";
import {
  availableCurrencies,
  AvailableCurrencyCode,
} from "../../../domain/Currency/models/Currency";

interface ActiveCurrencySymbolProps {
  activeCurrency: AvailableCurrencyCode | null;
}

const StyledCurrencyCode = styled("span")(({ theme }) => {
  const { palette, spacing } = theme;

  return {
    fontWeight: 700,
    color: palette.primary.main,
    marginLeft: spacing(1),
  };
});

const ActiveCurrencySymbol: FunctionComponent<ActiveCurrencySymbolProps> = ({
  activeCurrency,
}) => {
  const symbol = availableCurrencies.find(
    (curr) => curr.code === activeCurrency
  )?.symbol;

  if (!symbol) return null;

  return <span>({symbol})</span>;
};

const ActiveCurrency: FunctionComponent = () => {
  const { active: activeCurrency } = useContext(CurrencyContext);
  const { spacing } = useTheme();

  return (
    <Typography
      variant="h5"
      sx={{
        textAlign: "center",
        mb: spacing(5),
      }}
    >
      Wybrana waluta:
      <StyledCurrencyCode>
        {activeCurrency}{" "}
        <ActiveCurrencySymbol activeCurrency={activeCurrency} />
      </StyledCurrencyCode>
    </Typography>
  );
};

export default ActiveCurrency;
