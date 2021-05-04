import { useEffect } from "react";
import { getTides } from "./api";
import styled from "styled-components";

const PORT_LUDLOW_STATION_ID = "9445017";

const Page = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const App = () => {
  useEffect(() => {
    const fetchTides = async () => {
      const tides = await getTides(PORT_LUDLOW_STATION_ID, 2021, 5);
      console.log(tides);
    };

    fetchTides();
  }, []);

  return <Page>Test</Page>;
};

export default App;
