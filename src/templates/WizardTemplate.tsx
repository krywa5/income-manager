import React, { FunctionComponent, ReactNode } from "react";
import { Grow, Paper, styled, Typography, useTheme } from "@mui/material";

interface WizardTemplateProps {
  title?: ReactNode;
}

type HeaderProps = Pick<WizardTemplateProps, "title">;

const StyledHeader = styled("header")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  margin: theme.spacing(-4, -4, 5, -4),
  padding: theme.spacing(2),
  boxShadow: theme.shadows[4],
}));

const Header: FunctionComponent<HeaderProps> = ({ title }) => {
  return (
    <StyledHeader>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
    </StyledHeader>
  );
};

const WizardTemplate: FunctionComponent<WizardTemplateProps> = ({
  children,
  title,
}) => {
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
          overflow: "hidden",

          "@media print": {
            "&": {
              width: `calc(100% - 2*${spacing(4)} - 2*${spacing(4)})`,
              // boxShadow: "0px 0px 1px 0px black",
              boxShadow: "unset",
              // border: "1px solid black",
            },
          },
        }}
      >
        {title && <Header title={title} />}
        {children}
      </Paper>
    </Grow>
  );
};

export default WizardTemplate;
