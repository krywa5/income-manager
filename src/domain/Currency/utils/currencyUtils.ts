import { capitalize } from "lodash";

export const formatCurrencyForSelect = (title: string, symbol: string) =>
  `${capitalize(title)} [${symbol}]`;
