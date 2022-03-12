import { styled } from "@mui/material";
import React, { FunctionComponent, useContext } from "react";
import CurrencyContext from "../../../contexts/CurrencyContext";
import {
  availableCurrencies,
  AvailableCurrencyCode,
} from "../../../domain/Currency/models/Currency";
import WizardTemplate from "../../../templates/WizardTemplate";
import IncomeManager from "./IncomeManager";

interface ActiveCurrencySymbolProps {
  activeCurrency: AvailableCurrencyCode | null;
}

const StyledCurrencyCode = styled("span")(({ theme }) => {
  const { palette, spacing } = theme;

  return {
    fontWeight: 700,
    color: palette.primary.dark,
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

const IncomeManagerWizard: FunctionComponent = () => {
  const { active: activeCurrency } = useContext(CurrencyContext);
  const titleElement = (
    <span>
      Wybrana waluta:
      <StyledCurrencyCode>
        {activeCurrency}{" "}
        <ActiveCurrencySymbol activeCurrency={activeCurrency} />
      </StyledCurrencyCode>
    </span>
  );
  return (
    <WizardTemplate title={titleElement}>
      <IncomeManager />
    </WizardTemplate>
  );
};

export default IncomeManagerWizard;
