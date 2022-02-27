import { styled, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";

const StyledDiv = styled("div")(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  backgroundColor: theme.palette.secondary.main,
  padding: theme.spacing(1),
  borderTop: "1px solid black",
  borderBottom: "1px solid black",
  margin: `${theme.spacing(4)} -${theme.spacing(4)}`,
  textAlign: "center",
}));

const FormBar: FunctionComponent = () => {
  return (
    <StyledDiv>
      <Typography variant="body1">
        Wartości poniżej są obliczane automatycznie
      </Typography>
    </StyledDiv>
  );
};

export default FormBar;
