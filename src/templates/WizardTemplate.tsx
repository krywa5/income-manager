import { Grow, Paper, useTheme } from "@mui/material";
import React, { FunctionComponent } from "react";

const WizardTemplate: FunctionComponent = ({ children }) => {
  const { palette, spacing } = useTheme();

  return (
    <Grow in>
      <Paper
        elevation={24}
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: palette.background.paper,
          p: spacing(4),
          m: `${spacing(16)} auto ${spacing(10)}`,
          borderRadius: "20px",
          minWidth: 500,
        }}
      >
        {children}
      </Paper>
    </Grow>
  );
};

export default WizardTemplate;
