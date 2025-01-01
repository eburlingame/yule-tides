import dayjs from "dayjs";
import styled from "styled-components";

import { roundTens } from "@/api/utils";
import highTideArrow from "@/images/HighTideArrow.svg";
import lowTideArrow from "@/images/LowTideArrow.svg";

const TideContainer = styled.div`
  width: 5.7em;
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
  line-height: 1.2em;
`;

const Height = styled.div`
  color: #555;
  font-weight: 400;
  font-size: 1.25em;
`;

export type TideProps = {
  date: Date;
  height: number;
  type: "H" | "L";
};

const Tide = ({ date, height, type }: TideProps) => {
  const aOrP = dayjs(date).format("a") === "am" ? "a" : "p";

  return (
    <TideContainer>
      <ArrowContainer>
        <Arrow src={type === "H" ? highTideArrow.src : lowTideArrow.src} />
      </ArrowContainer>

      <TextBlock>
        <Time>{dayjs(date).format("h:mm") + aOrP}</Time>
        <Height>{roundTens(height, 1)}'</Height>
      </TextBlock>
    </TideContainer>
  );
};

export default Tide;
