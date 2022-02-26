import React, { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";

interface DefaultTemplateProps {}

const DefaultTemplate: FunctionComponent<DefaultTemplateProps> = ({
  children,
}) => {
  const { palette } = useTheme();
  return (
    <Box
      sx={{
        backgroundImage: `radial-gradient(${palette.primary.light}, ${palette.primary.dark})`,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </Box>
  );
};

export default DefaultTemplate;
