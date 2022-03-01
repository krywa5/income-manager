import {
  AvailableCurrencyCode,
  CurrencyData,
} from "../domain/Currency/models/Currency";

const URL = "http://api.nbp.pl/api/exchangerates/rates/a";

// const API_URL = `http://api.nbp.pl/api/exchangerates/rates/a/usd/${this.state.currencyValueDate}/?format=json`;
const createApiRequestUrl = (
  currencyCode: AvailableCurrencyCode,
  date: Date
) => {
  const firstFetchableDate = date; // tutaj walidacja daty

  const dateFormatted = firstFetchableDate.toISOString().split("T")[0];

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
  }
  return;
};

const NBP = {
  fetchCurrencyData,
};

export default NBP;
