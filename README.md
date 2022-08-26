# yule-tides

A React app that generates tide posters for a given location.

## Using a different location

In `App.js`, simply update the following:

```
const stationId = PORT_LUDLOW_STATION_ID;
const year = 2021;
const month = 5;
```

You can get the station id from [NOAA's website](https://tidesandcurrents.noaa.gov/map/index.html).

## Printing

From Firefox, select Print

- Destination: Save to PDF
- Paper size: Tabloid
- Scale: 100%
- Margins: None
- Print backgrounds: yes

Save as `YulesTides-YYYY-MM.pdf`

Usually printed from Staples: https://www.staples.com/services/printing/copies-documents-printing/

- Paper size: Ledger
- Scale to fit: No
- Paper: Basic white, 24lb
- Color Ink

## Running locally

In the project directory, you can run:

### `yarn start`
