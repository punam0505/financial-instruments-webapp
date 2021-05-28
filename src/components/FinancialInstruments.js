import React from 'react'
import * as constants from '../constants';

const FinancialInstruments = ({ financialInstruments }) => {
    return (
        financialInstruments.map((details, index) => {
            let color = "";
            if (details.assetClass.toUpperCase() === constants.MACRO) {
                color = "";
            } else if (details.assetClass.toUpperCase() === constants.CREDIT) {
                color = "table-success";
            } else if (details.assetClass.toUpperCase() === constants.EQUITIES) {
                color = "table-primary";
            }
            return (
                <tr key={index} className={color}>
                    <td>{index + 1}</td>
                    <td>{details.assetClass}</td>
                    <td style={(details.price >= 0) ? { color: 'blue' } : { color: 'red' }}>{details.price}</td>
                    <td>{details.ticker}</td>
                </tr>
            );
        }))
};

export default FinancialInstruments;
