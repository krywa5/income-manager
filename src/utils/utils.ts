export const formatDate = (date: Date, reverseDate?: boolean) =>
  date.toISOString().split("T")[0];
export const formatResponseDateToLocale = (date: string) =>
  date.split("-").reverse().join(".");

const daysOffInPoland = [
  "01-01",
  "01-06", // Trzech Króli
  "05-01",
  "05-03",
  "08-15", // Święto Wojska Polskiego
  "11-01",
  "11-11",
  "12-25",
  "12-26",
];

const irregularDaysOffInPoland = [
  // 2020
  "2020-04-12", // Wielkanoc
  "2020-04-13", // Lany poniedziałek
  "2020-05-31", // Zielone Świątki
  "2020-06-11", // Boże Ciało
  // 2021
  "2021-04-04", // Wielkanoc
  "2021-04-05", // Lany poniedziałek
  "2021-05-23", // Zielone Świątki
  "2021-06-03", // Boże Ciało
  // 2022
  "2022-04-17",
  "2022-04-18",
  "2022-06-05",
  "2022-06-16",
];

const isDateWeekendOrDayOff = (date: Date) => {
  let isWeekend = false;
  const dayIndex = date.getDay();
  const saturdayIndex = 6;
  const sundayIndex = 0;

  if (
    dayIndex === saturdayIndex ||
    dayIndex === sundayIndex ||
    daysOffInPoland.includes(date.toISOString().slice(5, 10)) || // check if regular day off
    irregularDaysOffInPoland.includes(date.toISOString().slice(0, 10)) // check if irregular day off
  ) {
    isWeekend = true; // change flag if the day is weekend
  }

  return isWeekend;
};

export const getLastWorkingDay = (date: Date) => {
  let isDayOff = false;
  let outputDate = date;

  outputDate.setDate(outputDate.getDate() - 1); // always subtract one day from original date

  for (let i = 0; i < 7; i++) {
    isDateWeekendOrDayOff(outputDate) ? (isDayOff = true) : (isDayOff = false);

    if (isDayOff === true) {
      outputDate.setDate(outputDate.getDate() - 1);
    } else {
      break; // end the loop if the working the was found
    }
  }

  return outputDate;
};
