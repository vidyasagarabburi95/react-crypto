// Write your JS code here

import './index.css'

import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  coinType = () => (
    <div className="coin">
      <p>Coin Type</p>
      <div className="flex-2">
        <p>USD</p>
        <p>EURO</p>
      </div>
    </div>
  )

  render() {
    const {currencyData} = this.props
    return (
      <div className="bg-con-container">
        <h1>Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="blue-line-container">
          {this.coinType()}
          <ul>
            {currencyData.map(eachCurrency => (
              <CryptocurrencyItem
                key={eachCurrency.id}
                currencyItem={eachCurrency}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
