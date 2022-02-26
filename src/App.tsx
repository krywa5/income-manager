import { ThemeProvider } from "@mui/material/styles";
import React, { FunctionComponent } from "react";
import AppContext, { initAppState } from "./contexts/AppContext";
import AppRouting from "./routes/Routing";
import "./theme/reset.css";
import Theme from "./theme/Theme";

const App: FunctionComponent = () => (
  <ThemeProvider theme={Theme}>
    <AppContext.Provider value={initAppState}>
      <AppRouting />
    </AppContext.Provider>
  </ThemeProvider>
);

export default App;
