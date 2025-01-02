import { TideRecord } from "@/api/api";
import Tide from "./Tide";

import dayjs from "dayjs";
import styled from "styled-components";

const TideDayContainer = styled.div<{ isWeekend: boolean }>`
  height: 1.9em;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0.09in 0.1in 0.1in 0.1in;
  border-top: 1px solid #ddd;

  background-color: ${(props) => (props.isWeekend ? "#f2f2f2" : "transparent")};
`;

const DateContainer = styled.div`
  flex: 1;
  font-size: 1.25em;
  font-weight: 500;
`;

const TidesContainer = styled.div`
  display: flex;
  min-width: 376px;
`;

export type TideDayProps = {
  tideEntries: TideRecord[];
};

const TideDay = ({ tideEntries }: TideDayProps) => {
  const { date } = tideEntries[0];

  const isWeekend = ["Saturday", "Sunday"].includes(dayjs(date).format("dddd"));

  return (
    <TideDayContainer isWeekend={isWeekend}>
      <DateContainer>{dayjs(date).format("ddd D")}</DateContainer>

      <TidesContainer>
        {tideEntries
          .slice(0, Math.min(tideEntries.length, 4))
          .map(({ date, height, type }) => (
            <Tide
              date={date}
              key={date.toISOString()}
              height={height}
              type={type}
            />
          ))}
      </TidesContainer>
    </TideDayContainer>
  );
};

export default TideDay;
