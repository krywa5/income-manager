import { Paper, useTheme } from "@mui/material";
import React, { FunctionComponent, useContext } from "react";
import CurrencyForm from "../../components/molecules/currency-form/CurrencyForm";
import AppContext from "../../contexts/AppContext";
import DefaultTemplate from "../../templates/DefaultTemplate";

const Home: FunctionComponent = () => {
  const { palette, spacing } = useTheme();
  const { wizard } = useContext(AppContext);
  return (
    <DefaultTemplate>
      <Paper
        elevation={24}
        sx={{
          backgroundColor: palette.background.paper,
          p: spacing(4),
          mt: spacing(16),
          ml: "auto",
          mr: "auto",
          borderRadius: "20px",
          minWidth: 500,
        }}
      >
        <CurrencyForm />
      </Paper>
    </DefaultTemplate>
  );
};

export default Home;
