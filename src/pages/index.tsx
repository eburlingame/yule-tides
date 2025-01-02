import Poster from "@/components/Poster";
import Head from "next/head";

export default function Home() {
  // You can find the station ids from NOAA: https://tidesandcurrents.noaa.gov/map/index.html
  const stationId = process.env.NEXT_PUBLIC_NOAA_TIDE_LOCATION_ID as string;

  return (
    <>
      <Head>
        <title>Tide Chart</title>
        <meta name="description" content="The tides at Chez Burlingame" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Poster
        stationId={stationId}
        year={new Date().getFullYear()}
        month={new Date().getMonth() + 1}
      />
    </>
  );
}
