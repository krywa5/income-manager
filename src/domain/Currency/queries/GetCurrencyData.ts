import NBP from "../../../services/NBP.service";
import { AvailableCurrencyCode } from "../models/Currency";

async function GetCurrencyData(
  currencyCode: AvailableCurrencyCode,
  date: Date
) {
  const response = await NBP.fetchCurrencyData(currencyCode, date);

  return response;
}

export default GetCurrencyData;
