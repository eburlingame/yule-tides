import Poster from "@/components/Poster";
import dayjs from "dayjs";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  // You can find the station ids from NOAA: https://tidesandcurrents.noaa.gov/map/index.html
  const stationId = process.env.NEXT_PUBLIC_NOAA_TIDE_LOCATION_ID as string;

  const initialDate = dayjs().set("date", 1).toDate();
  const [date, setDate] = useState<Date>(initialDate);

  useEffect(() => {
    // Read from query params
    const initialMonth = router.query.month
      ? parseInt(router.query.month as string) - 1
      : dayjs().month();

    const initialYear = router.query.year
      ? parseInt(router.query.year as string)
      : dayjs().year();

    setDate(
      dayjs().set("year", initialYear).set("month", initialMonth).toDate()
    );
  }, [router.query]);

  return (
    <>
      <Head>
        <title>Tide Chart</title>
        <meta name="description" content="The tides at Chez Burlingame" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div
          className="no-print"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              onClick={() => setDate(dayjs(date).subtract(2, "month").toDate())}
            >
              Prev Month
            </button>
            <input
              type="date"
              value={dayjs(date).format("YYYY-MM-DD")}
              onChange={(e) =>
                setDate(dayjs(e.target.value).set("date", 1).toDate())
              }
            />
            <button
              onClick={() => setDate(dayjs(date).add(2, "month").toDate())}
            >
              Next Month
            </button>
          </div>

          <Link href="/print-directions" style={{ marginLeft: "1em" }}>
            Directions for printing
          </Link>
        </div>

        <Poster
          stationId={stationId}
          year={date.getFullYear()}
          month={date.getMonth() + 1}
        />
      </div>
    </>
  );
}
