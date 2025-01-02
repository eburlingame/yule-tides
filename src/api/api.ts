import { groupBy } from "lodash";
import { formatLeadingZero } from "./utils";

const url = (stationId: string, startDate: string, endDate: string) =>
  `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?product=predictions&application=NOS.COOPS.TAC.WL&begin_date=${startDate}&end_date=${endDate}&datum=MLLW&station=${stationId}&time_zone=lst_ldt&units=english&interval=hilo&format=json`;

const formatDate = (date: Date) =>
  `${date.getFullYear()}${formatLeadingZero(
    date.getMonth() + 1
  )}${formatLeadingZero(date.getDate())}`;

const urlForDate = (stationId: string, year: number, month: number) => {
  month -= 1; // Account for 0-offset month

  const startDate = new Date(year, month, 1, 0, 0, 0, 0);
  const endDate = new Date(year, month + 1, 0);

  return url(stationId, formatDate(startDate), formatDate(endDate));
};

export const getTides = async (
  stationId: string,
  year: number,
  month: number
) => {
  const fetchUrl = urlForDate(stationId, year, month);
  console.log(fetchUrl);

  const response = await fetch(fetchUrl);
  const result = await response.json();

  return result;
};

export type NOAATideEntry = {
  t: string;
  v: string;
  type: "H" | "L";
};

export type TideRecord = {
  day: number;
  date: Date;
  height: number;
  type: "H" | "L";
};

export const getTidesByDay = async (
  stationId: string,
  year: number,
  month: number
): Promise<TideRecord[][]> => {
  const { predictions } = await getTides(stationId, year, month);

  const parsedTides: TideRecord[] = predictions.map(
    ({ t, v, type }: NOAATideEntry) => ({
      day: new Date(t).getDate(),
      date: new Date(t),
      height: parseFloat(v),
      type,
    })
  );

  const tidesByDay = groupBy(parsedTides, "day");
  const days = Object.keys(tidesByDay)
    .map((s) => parseInt(s))
    .sort((a, b) => a - b);

  return days.map((day) => tidesByDay[day]);
};
