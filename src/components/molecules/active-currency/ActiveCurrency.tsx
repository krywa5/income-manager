import { styled, Typography, useTheme } from "@mui/material";
import React, { FunctionComponent, useContext } from "react";
import CurrencyContext from "../../../contexts/CurrencyContext";

const StyledCurrencyCode = styled("span")(({ theme }) => {
  const { palette, spacing } = theme;

  return {
    fontWeight: 700,
    color: palette.primary.main,
    marginLeft: spacing(1),
  };
});

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
      <StyledCurrencyCode>{activeCurrency}</StyledCurrencyCode>
    </Typography>
  );
};

export default ActiveCurrency;
