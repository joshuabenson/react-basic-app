import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {

  state = {
    stocks: []
  };
  removeStock = (index) => {
    const {stocks} = this.state;
    this.setState({
      stocks: stocks.filter((character, i) => {
        return i !== index;
      }),
    })
  };



  handleSubmit = (stock) => {
    const fetchStockData = (stock) => {
      // https://financialmodelingprep.com/api/v3/market-capitalization/AAPL?apikey=demo
      fetch('https://financialmodelingprep.com/api/v3/profile/' + stock.symbol.toUpperCase() + '?apikey=ea4063dd504a48c85e6a945bf8918972')
        .then((result) => result.json())
        .then((result) => {
          if (result[0]) {
            fetch('https://financialmodelingprep.com/api/v3/key-metrics-ttm/' + stock.symbol.toUpperCase() + '?apikey=ea4063dd504a48c85e6a945bf8918972')
            .then((keyMetricsResult) => keyMetricsResult.json())
            .then((keyMetricsResult) => {
              result = {...result[0], ...keyMetricsResult[0]};
              console.log('result', result);
              this.setState({stocks: [...this.state.stocks, result]});
            });
          } else {
            console.log('not found');
            toast("Symbol " + stock.symbol.toUpperCase() + " not found");
          }
        });
    };
    fetchStockData(stock);
  };

  render() {
    const { stocks } = this.state;
    return (
      <div className="container">
        <Table stockData={stocks} removeStock={this.removeStock} />
        <Form handleSubmit={this.handleSubmit}/>
        <ToastContainer />
      </div>
    );
  };

};

export default App;
