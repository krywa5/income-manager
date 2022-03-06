import {
  AvailableCurrencyCode,
  CurrencyData,
} from "../domain/Currency/models/Currency";
import { formatDate, getLastWorkingDay } from "../utils/utils";

const URL = "http://api.nbp.pl/api/exchangerates/rates/a";

const createApiRequestUrl = (
  currencyCode: AvailableCurrencyCode,
  date: Date
) => {
  const firstFetchableDate = getLastWorkingDay(date);

  const dateFormatted = formatDate(firstFetchableDate);

  return `${URL}/${currencyCode.toLowerCase()}/${dateFormatted}/?format=json`;
};

const fetchCurrencyData = async (
  currencyCode: AvailableCurrencyCode,
  date: Date
): Promise<CurrencyData | undefined> => {
  try {
    return await fetch(createApiRequestUrl(currencyCode, date))
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  } catch (err) {
    console.error(err);
    alert(
      `Błąd przy pobieraniu waluty. Prawdopodobnie tego dnia (${formatDate(
        date
      )}) był dzień wolny od pracy.`
    );
  }
  return;
};

const NBP = {
  fetchCurrencyData,
};

export default NBP;
