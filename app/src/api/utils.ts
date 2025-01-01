import dayjs from "dayjs";

export const roundTens = (number: number, place: number) => {
  const factor = Math.pow(10, place);
  return Math.round(number * factor) / factor;
};

export const getMonthName = (month: number) =>
  dayjs()
    .year(2022)
    .month(month - 1)
    .date(1)
    .format("MMMM");

export const formatLeadingZero = (num: number) => (num < 10 ? "0" + num : num);
