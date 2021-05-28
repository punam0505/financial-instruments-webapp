# financial-instruments-webapp

### __Purpose__

This repository contains the Financial Instrument Web App.  
This app contains single page application that represents a table of financial instruments.
This app has the following capabilities.
* Sorting
    * by “Asset Class”: Macro first, then Equities and Credit last.
    * by “Price” in descending order
    * by “Ticker” in alphabetical order
* Presentation
    * Rows are colour-coded by “Asset Class”:
    * Macro = White
    * Equities = Blue
    * Credit = Green
    * “Price” is in blue if positive and red if negative

----

## Setup

  1. Go into directory `financial-instruments-webapp` and run `npm install`.
  2. Run `npm start` to start application. This should start dev server on <http://localhost:3000/>

----

### __Scripts__

`npm install`  
Installs all the dependencies required for the project 


`npm start`  
starts dev server on [http://localhost:3000](#)

----