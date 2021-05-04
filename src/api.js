const url = (stationId, startDate, endDate) =>
  `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?product=predictions&application=NOS.COOPS.TAC.WL&begin_date=${startDate}&end_date=${endDate}&datum=MLLW&station=${stationId}&time_zone=lst_ldt&units=english&interval=hilo&format=json`;

const formatLeadingZero = (num) => (num < 10 ? "0" + num : num);

const formatDate = (date) =>
  `${date.getFullYear()}${formatLeadingZero(
    date.getMonth() + 1
  )}${formatLeadingZero(date.getDate())}`;

const urlForDate = (stationId, year, month) => {
  month -= 1; // Account for 0-offset month

  const startDate = new Date(year, month, 1, 0, 0, 0, 0);
  const endDate = new Date(year, month + 1, 0);

  return url(stationId, formatDate(startDate), formatDate(endDate));
};

export const getTides = async (stationId, year, month) => {
  const fetchUrl = urlForDate(stationId, year, month);
  console.log(fetchUrl);

  const response = await fetch(fetchUrl);
  const result = await response.json();

  return result;
};
