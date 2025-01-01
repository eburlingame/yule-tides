import styled from "styled-components";

import { getMonthName } from "@/api/utils";
import headerImage from "@/images/tidesheader.svg";
import TideTable from "./TideTable";

const Page = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 0.45in;
  background-color: #fff;
  box-sizing: border-box;

  font-family: adelle, serif;
  font-weight: 400;
  font-style: normal;
  font-size: 9pt;
`;

const Header = styled.div`
  width: 100%;
  text-align: center;
`;

const HeaderImage = styled.img`
  margin-bottom: 0.15in;

  margin-left: auto;
  margin-right: auto;

  height: 1.8in;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 0.5in;
  padding-right: 0.5in;
  padding-bottom: 0.5in;
`;

const MonthTitle = styled.div`
  font-size: 1.75em;
  font-weight: 600;
  margin-bottom: 0.5em;
`;

export type PosterProps = {
  stationId: string;
  year: number;
  month: number;
};

const Poster = ({ stationId, year, month }: PosterProps) => {
  const leftMonth = month;
  const rightMonth = month + 1;

  const yearString = `'${year.toString().substring(2, 4)}`;

  return (
    <Page>
      <Header>
        <HeaderImage src={headerImage.src} />
      </Header>
      <Body>
        <div style={{ flex: 1, marginRight: "0.2in" }}>
          <MonthTitle>
            {getMonthName(leftMonth)} {yearString}
          </MonthTitle>
          <TideTable stationId={stationId} year={year} month={leftMonth} />
        </div>
        <div style={{ flex: 1, marginLeft: "0.2in" }}>
          <MonthTitle>
            {getMonthName(rightMonth)} {yearString}
          </MonthTitle>

          <TideTable stationId={stationId} year={year} month={rightMonth} />
        </div>
      </Body>
    </Page>
  );
};

export default Poster;
