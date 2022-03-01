import { styled } from "@mui/material";
import React, { FunctionComponent } from "react";

interface HorizontalDividerProps {
  className?: string;
}

const StyledContainer = styled("div")({
  margin: "40px auto 30px",
  width: "90%",
  position: "relative",
  overflow: "hidden",
  height: 10,
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

const HorizontalDivider: FunctionComponent<HorizontalDividerProps> = ({
  className = "",
}) => {
  return (
    <StyledContainer className={className}>
      <Shadow />
    </StyledContainer>
  );
};

export default HorizontalDivider;
