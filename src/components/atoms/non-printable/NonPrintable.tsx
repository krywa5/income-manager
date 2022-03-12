import { cloneElement, FunctionComponent, ReactElement } from "react";

interface NonPrintableProps {
  children: ReactElement;
}

const NonPrintable: FunctionComponent<NonPrintableProps> = ({ children }) => {
  return cloneElement(children, {
    sx: {
      ...children.props.sx,
      "@media print": {
        "&": {
          display: "none",
        },
      },
    },
  });
};

export default NonPrintable;
