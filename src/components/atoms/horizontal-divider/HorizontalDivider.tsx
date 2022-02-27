import { styled } from "@mui/material";
import React, { FunctionComponent } from "react";

interface HorizontalDividerProps {
  className?: string;
}

const StyledContainer = styled("div")({
  margin: "60px auto",
  width: "80%",
  position: "relative",
  overflow: "hidden",
  height: 20,
});

const Shadow = styled("div")({
  "&::after": {
    content: "''",
    display: "block",
    margin: "-25px auto 0",
    width: "100%",
    height: "25px",
    borderRadius: "125px/12px",
    boxShadow: "0 0 8px black",
  },
});

const Text = styled("div")({
  width: "70px",
  height: "70px",
  position: "absolute",
  bottom: "100%",
  marginBottom: "-35px",
  left: "50%",
  marginLeft: "-25px",
  borderRadius: "100%",
  boxShadow: "0 2px 4px #999",
  background: "white",
});

const HorizontalDivider: FunctionComponent<HorizontalDividerProps> = ({
  className = "",
}) => {
  return (
    <StyledContainer className={className}>
      <Shadow />
      <Text />
    </StyledContainer>
  );
};

export default HorizontalDivider;
