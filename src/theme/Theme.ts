import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    primary: {
      light: "#64c1ff",
      main: "#0091ea",
      dark: "#0064b7",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffd95a",
      main: "#f9a825",
      dark: "#c17900",
      contrastText: "#000",
    },
    background: {
      default: "#eee",
    },
  },
});

export default Theme;