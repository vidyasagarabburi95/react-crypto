// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyItem} = props
  const {id, currencyLogo, euroValue, usdValue, currencyName} = currencyItem
  return (
    <li key={id} className="currency-log-usd-euro">
      <div className="flex-1">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p>{currencyName}</p>
      </div>
      <div className="usd-euro">
        <p className="currency usd">{usdValue}</p>
        <p className="currency euro">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
