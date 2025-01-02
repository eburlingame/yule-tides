# yule-tides

A React app that generates tide posters for a given location.

## Using a different location

- Set the `NEXT_PUBLIC_NOAA_TIDE_LOCATION_ID` env variables to the NOAA station id.
- You can get the station id from [NOAA's website](https://tidesandcurrents.noaa.gov/map/index.html).

## Printing

1. Open the month you want to print in Firefox, then hit print:
   - Print options:
     - Destination: Save to PDF
     - Scale: 100%
     - Margins: None
     - Print backgrounds: Yes
   - Save as `Tidechart-YYYY-MM.pdf`
2. Order prints
   - Usually printed from [Staples](https://www.staples.com/services/printing/copies-documents-printing/)
   - Select `Simple Print`
   - Upload the pdf files
   - Set up print:
     - Paper size: Ledger
     - Scale to fit: No
     - Paper: Basic white, 24lb
     - Color Ink

## Running locally

In the project directory, you can run:

- `cd app`
- `yarn dev`
