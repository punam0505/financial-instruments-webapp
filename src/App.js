import React, { Component } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import * as constants from './constants';
import FinancialInstruments from './components/FinancialInstruments';


export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      financialInstruments: []
    }
  }

  componentDidMount() {
    fetch(`${document.location.origin}${constants.ENV_CONFIG}`)
      .then((response) => response.json())
      .then(financialInstrumentsList => {
        this.setState({ financialInstruments: financialInstrumentsList });
      });
  }

  /* Sort Financial Instruments response by "Price" in Descending Order*/
  sortInstructmentsByPrice(financialDetails) {
    const sortByPrice = financialDetails.sort((price1, price2) => {
      return price2.price - price1.price;
    });
    this.setState({ financialInstruments: sortByPrice });
  };

  /* Sort Financial Instruments response by "Ticker" in alphabetical order*/
  sortInstructmentsByTicker(financialDetails) {
    const sortByTicker = financialDetails.sort((initialTicker1, initialTicker2) => {
      const ticker1 = initialTicker1.ticker;
      const ticker2 = initialTicker2.ticker;
      if (ticker1 > ticker2) {
        return 1;
      }
      if (ticker1 < ticker2) {
        return -1;
      }
      return 0;
    });
    this.setState({ financialInstruments: sortByTicker });
  };

  /* Sort Financial Instruments response by “Asset Class”: Macro first, then Equities and Credit last.*/
  sortInstructmentsByAsset(financialDetails) {
    const macroData = financialDetails.filter(
      (details) => details.assetClass.toUpperCase() === constants.MACRO
    );
    const creditData = financialDetails.filter(
      (details) => details.assetClass.toUpperCase() === constants.CREDIT
    );
    const equityData = financialDetails.filter(
      (details) => details.assetClass.toUpperCase() === constants.EQUITIES
    );
    const sortByAsset = macroData.concat(equityData, creditData);
    this.setState({ financialInstruments: sortByAsset });
  };

  render() {
    return (
      <div className="Container">
        <h1 className="text-center">Financial Instruments</h1>
        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div className="btn-group mr-2" role="group" aria-label="First group">
            <button className="btn btn-dark col-xs-3" onClick={() => this.sortInstructmentsByPrice(this.state.financialInstruments)}>Sort Price</button>
          </div>
          <div className="btn-group mr-2" role="group" aria-label="Second group">
            <button className="btn btn-dark" onClick={() => this.sortInstructmentsByTicker(this.state.financialInstruments)}>Sort Ticker</button>
          </div>
          <div className="btn-group" role="group" aria-label="Third group">
            <button className="btn btn-dark" onClick={() => this.sortInstructmentsByAsset(this.state.financialInstruments)}>Sort Asset</button>
          </div>
        </div>
        <br />
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Sr No</th>
              <th scope="col">Asset Class</th>
              <th scope="col">Price</th>
              <th scope="col">Ticker</th>
            </tr>
          </thead>
          <tbody>
            <FinancialInstruments financialInstruments={this.state.financialInstruments} />
          </tbody>
        </table>

      </div>
    )
  }
}

export default App

