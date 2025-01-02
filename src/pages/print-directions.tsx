import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tide Chart</title>
        <meta name="description" content="The tides at Chez Burlingame" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <ol>
          <li>
            Open the <a href="/">month</a> you want to print in Firefox, then
            hit print:
            <ul>
              <li>
                Print options:
                <ul>
                  <li>Destination: Save to PDF</li>
                  <li>Scale: 100%</li>
                  <li>Margins: None</li>
                  <li>Print backgrounds: Yes</li>
                </ul>
              </li>
              <li>
                Save as <code>Tidechart-YYYY-MM.pdf</code>
              </li>
            </ul>
          </li>
          <li>
            Order prints
            <ul>
              <li>
                Usually printed from{" "}
                <a href="https://www.staples.com/services/printing/copies-documents-printing/">
                  Staples
                </a>
              </li>
              <li>
                Select <code>Simple Print</code>
              </li>
              <li>Upload the pdf files</li>
              <li>
                Print options:
                <ul>
                  <li>Paper size: Ledger</li>
                  <li>Scale to fit: No</li>
                  <li>Paper: Basic white, 24lb</li>
                  <li>Color Ink</li>
                </ul>
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </>
  );
}
