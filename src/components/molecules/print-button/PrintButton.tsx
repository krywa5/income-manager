import React, { FunctionComponent } from "react";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import CTAButton from "../../atoms/cta-button/CTAButton";

const PrintButton: FunctionComponent = () => {
  const printHandler = () => {
    window.print();
  };

  return (
    <CTAButton tooltip="Drukuj" onClick={printHandler}>
      <LocalPrintshopOutlinedIcon fontSize="large" />
    </CTAButton>
  );
};

export default PrintButton;
