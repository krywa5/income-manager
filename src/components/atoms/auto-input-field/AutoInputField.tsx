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

const StyledHelpersContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: `calc(${theme.spacing(1)} / 4)`,
}));

interface AutoInputFieldProps {
  label: string;
  labelHelpers?: string[];
  inputComponent: JSX.Element;
}

const AutoInputField: FunctionComponent<AutoInputFieldProps> = ({
  label,
  labelHelpers = [],
  inputComponent,
}) => {
  return (
    <StyledContainer>
      <StyledLabelContainer>
        <Typography variant="body1">{label}</Typography>
        {labelHelpers.length ? (
          <StyledHelpersContainer>
            {labelHelpers.map((labelHelper) => (
              <Typography variant="caption" key={labelHelper}>
                {labelHelper}
              </Typography>
            ))}
          </StyledHelpersContainer>
        ) : null}
      </StyledLabelContainer>
      {inputComponent}
    </StyledContainer>
  );
};

export default AutoInputField;
