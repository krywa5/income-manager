import { styled, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";

const StyledContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "&:not(:last-child)": {
    marginBottom: theme.spacing(2),
  },
}));

const StyledLabelContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});

interface AutoInputFieldProps {
  label: string;
  labelHelper?: string;
  inputComponent: JSX.Element;
}

const AutoInputField: FunctionComponent<AutoInputFieldProps> = ({
  label,
  labelHelper,
  inputComponent,
}) => {
  return (
    <StyledContainer>
      <StyledLabelContainer>
        <Typography variant="body1">{label}</Typography>
        {labelHelper && <Typography variant="body2">{labelHelper}</Typography>}
      </StyledLabelContainer>
      {inputComponent}
    </StyledContainer>
  );
};

export default AutoInputField;
