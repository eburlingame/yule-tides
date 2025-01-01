import { getTidesByDay, TideRecord } from "@/api/api";
import { useEffect, useState } from "react";
import styled from "styled-components";
import TideDay from "./TideDay";

const TideTableContainer = styled.div`
  flex: 1;
`;

export type TideTableProps = {
  stationId: string;
  year: number;
  month: number;
};

const TideTable = ({ stationId, year, month }: TideTableProps) => {
  const [tides, setTides] = useState<TideRecord[][]>([]);

  useEffect(() => {
    const fetchTides = async () => {
      const tidesByDay = await getTidesByDay(stationId, year, month);
      setTides(tidesByDay);
    };

    fetchTides();
  }, [year, month, stationId]);

  return (
    <TideTableContainer>
      {tides.map((entries) => (
        <TideDay tideEntries={entries} />
      ))}
    </TideTableContainer>
  );
};

export default TideTable;
