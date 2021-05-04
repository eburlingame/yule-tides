import { useEffect, useState } from "react";
import { getTides, getTidesByDay } from "./api";
import styled from "styled-components";
import dayjs from "dayjs";

import headerImageSrc from "./images/tidesheader.svg";
import highTideArrowSrc from "./images/HighTideArrow.svg";
import lowTideArrowSrc from "./images/LowTideArrow.svg";

const PORT_LUDLOW_STATION_ID = "9445017";

const Page = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 0.5in;
  box-sizing: border-box;

  font-family: adelle, serif;
  font-weight: 400;
  font-style: normal;
  font-size: 9pt;
`;

const Header = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 0.5in;
`;

const HeaderImage = styled.img`
  margin-left: auto;
  margin-right: auto;

  height: 1.8in;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
`;

const TideTableContainer = styled.div`
  flex: 1;
`;

const TideContainer = styled.div`
  width: 5em;

  margin-left: 2.15em;

  display: flex;
  flex-direction: row;
  align-items: center;

  font-family: canada-type-gibson, sans-serif;
`;

const ArrowContainer = styled.div`
  margin-top: 0.3em;
  margin-right: 0.6em;
`;

const Arrow = styled.img``;

const TextBlock = styled.div`
  margin-top: 0.05em;
`;

const Time = styled.div`
  font-size: 1.25em;
  font-weight: 500;
  font-style: normal;
  line-height: 1.1em;
`;

const Height = styled.div`
  color: #777;
  font-size: 1em;
`;

const roundTens = (number, place) => {
  const factor = Math.pow(10, place);
  return Math.round(number * factor) / factor;
};

const Tide = ({ date, height, type }) => {
  const aOrP = dayjs(date).format("a") === "am" ? "a" : "p";

  return (
    <TideContainer>
      <ArrowContainer>
        <Arrow src={type === "H" ? highTideArrowSrc : lowTideArrowSrc} />
      </ArrowContainer>

      <TextBlock>
        <Time>{dayjs(date).format("h:mm") + aOrP}</Time>
        <Height>{roundTens(height, 1)}'</Height>
      </TextBlock>
    </TideContainer>
  );
};

const TideDayContainer = styled.div`
  height: 1.75em;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0.1in 0.1in 0.1in 0.1in;
  border-top: 1px solid #eee;

  background-color: ${(props) => (props.isWeekend ? "#efefef" : "transparent")};
`;

const DateContainer = styled.div`
  flex: 1;
  font-size: 1.25em;
  font-weight: 500;
`;

const TidesContainer = styled.div`
  display: flex;
  min-width: 350px;
`;

const TideDay = ({ tideEntries }) => {
  const { date } = tideEntries[0];

  const isWeekend = ["Saturday", "Sunday"].includes(dayjs(date).format("dddd"));

  return (
    <TideDayContainer isWeekend={isWeekend}>
      <DateContainer>{dayjs(date).format("ddd, MMM D")}</DateContainer>

      <TidesContainer>
        {tideEntries.map(({ date, height, type }) => (
          <Tide date={date} height={height} type={type} />
        ))}
      </TidesContainer>
    </TideDayContainer>
  );
};

const TideTable = ({ stationId, year, month }) => {
  const [tides, setTides] = useState([]);

  useEffect(() => {
    const fetchTides = async () => {
      const tidesByDay = await getTidesByDay(stationId, year, month);
      setTides(tidesByDay);
    };

    fetchTides();
  }, []);

  return (
    <TideTableContainer>
      {tides.map((entries) => (
        <TideDay tideEntries={entries} />
      ))}
    </TideTableContainer>
  );
};

const MonthTitle = styled.div`
  font-size: 1.5em;
  font-weight: 700;
  margin-bottom: 0.5em;
`;

const getMonthName = (month) =>
  dayjs()
    .year(2000)
    .month(month - 1)
    .day(1)
    .format("MMMM");

const App = () => {
  const stationId = PORT_LUDLOW_STATION_ID;
  const year = 2021;
  const month = 5;

  const leftMonth = month;
  const rightMonth = month + 1;

  return (
    <Page>
      <Header>
        <HeaderImage src={headerImageSrc} />
      </Header>
      <Body>
        <div style={{ flex: 1, marginRight: "0.15in" }}>
          <MonthTitle>{getMonthName(leftMonth)}</MonthTitle>
          <TideTable stationId={stationId} year={year} month={leftMonth} />
        </div>
        <div style={{ flex: 1, marginLeft: "0.15in" }}>
          <MonthTitle>{getMonthName(rightMonth)}</MonthTitle>
          <TideTable stationId={stationId} year={year} month={rightMonth} />
        </div>
      </Body>
    </Page>
  );
};

export default App;
