import { Button, Slide, styled, Tooltip, useTheme } from "@mui/material";
import { ComponentProps, FunctionComponent } from "react";
import NonPrintable from "../non-printable/NonPrintable";

const StyledContainer = styled("div")(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(5),
  right: theme.spacing(5),
}));

interface CTAButtonProps extends ComponentProps<typeof Button> {
  tooltip?: string;
}

const CTAButton: FunctionComponent<CTAButtonProps> = ({
  children,
  tooltip,
  ...restOfProps
}) => {
  const { transitions } = useTheme();

  return (
    <NonPrintable>
      <Tooltip title={tooltip || ""} placement="top">
        <Slide
          in
          direction="up"
          easing={{ enter: transitions.easing.easeOut }}
          timeout={1000}
        >
          <StyledContainer>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              {...restOfProps}
            >
              {children}
            </Button>
          </StyledContainer>
        </Slide>
      </Tooltip>
    </NonPrintable>
  );
};

export default CTAButton;
