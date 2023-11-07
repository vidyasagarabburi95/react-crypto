// Write your code here
import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {
    data: {},
    isLoading: true,
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const fetchedData = await response.json()
    console.log(fetchedData)
    const updatedData = await fetchedData.map(each => ({
      id: each.id,
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      currencyLogo: each.currency_logo,
    }))
    this.setState({data: updatedData, isLoading: false})
  }

  renderCurrencyList = () => {
    const {data} = this.state
    return <CryptocurrenciesList currencyData={data} />
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-con">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCurrencyList()
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
