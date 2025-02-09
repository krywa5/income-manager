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
  "2020-04-13",
  "2020-05-31", // Zielone Świątki
  "2020-06-11", // Boże Ciało
  // 2021
  "2021-04-04", // Wielkanoc
  "2021-04-05",
  "2021-05-23", // Zielone Świątki
  "2021-06-03", // Boże Ciało
  // 2022
  "2022-04-17", // Wielkanoc
  "2022-04-18",
  "2022-06-05", // Zielone Świątki
  "2022-06-16", // Boże Ciało
  // 2023
  "2023-04-09", // Wielkanoc
  "2023-04-10",
  "2023-05-28", // Zielone Świątki
  "2023-06-08", // Boże Ciało
  // 2024
  "2024-03-31", // Wielkanoc
  "2024-04-01",
  "2024-05-19", // Zielone Świątki
  "2024-05-30", // Boże Ciało
  // 2025
  "2025-04-20", // Wielkanoc
  "2025-04-21",
  "2025-06-08", // Zielone Świątki
  "2025-06-19", // Boże Ciało
];

const isDayOffInPoland = (date: Date): boolean => {
  const dayIndex = date.getDay();
  const dateISOString = date.toISOString();
  const saturdayIndex = 6;
  const sundayIndex = 0;

  const isWeekend = dayIndex === saturdayIndex || dayIndex === sundayIndex;
  const isDayOff =
    daysOffInPoland.includes(dateISOString.slice(5, 10)) || // check if regular day off
    irregularDaysOffInPoland.includes(dateISOString.slice(0, 10));

  return isWeekend || isDayOff;
};

const getOneDayBefore = (date: Date): Date => {
  const yesterday = new Date(date.getTime());
  yesterday.setDate(date.getDate() - 1);
  return yesterday;
};

export const getLastWorkingDay = (date: Date): Date => {
  const dateMinusDay = getOneDayBefore(date);

  if (isDayOffInPoland(dateMinusDay)) {
    return getLastWorkingDay(dateMinusDay);
  }

  return dateMinusDay;
};
