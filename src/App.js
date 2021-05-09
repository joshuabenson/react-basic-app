import React, {Component} from 'react';
import Store from './Store';
import Table from './Table';
import Form from './Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
	state = Store.getState();

	updateStateFromStore = () => {
		this.setState(Store.getState());
	}

  	componentDidMount = () => {
		this.unsubscribeStore = Store.subscribe(this.updateStateFromStore);
		// parse the url params for 'symbol' and add them if present
		const searchParams = new URLSearchParams(window.location.search);
		searchParams.getAll('symbol').forEach((symbolParam) => {
			this.addStockAndRequestMetrics({symbol: symbolParam});
		});

  	}

  	componentWillUnmount = () => {
		this.unsubscribeStore();
  	}

	removeStock = (index) => {
		Store.dispatch({ type: 'REMOVE_STOCK', index: index });
	}

	addStockAndRequestMetrics = (stock) => {
		const fetchStockData = (stock) => {
			// first fetch to /profile gets name and real time quote up to the minute
			fetch('https://financialmodelingprep.com/api/v3/profile/' + stock.symbol.toUpperCase() + '?apikey=ea4063dd504a48c85e6a945bf8918972')
				.then((result) => {
					// codes 300 and up will not return data so display error
					if (result.status > 299) {
						toast("API error " + result.status);
					}
					return result.json();
				})
				.then((result) => {
					if (result[0]) {
						// second fetch to /key-metrics-ttm gets more metrics like trailing twelve month book value
						fetch('https://financialmodelingprep.com/api/v3/key-metrics-ttm/' + stock.symbol.toUpperCase() + '?apikey=ea4063dd504a48c85e6a945bf8918972')
						.then((keyMetricsResult) => keyMetricsResult.json())
						.then((keyMetricsResult) => {
							// combine both responses
							result = {...result[0], ...keyMetricsResult[0]};
							// finally update the store
							Store.dispatch({ type: 'ADD_STOCK', object: result });
						});
					} else {
						toast("Symbol " + stock.symbol.toUpperCase() + " not found");
					}
				});
		};
		fetchStockData(stock);
	}

	handleUpdate = () => {
		let stocks = Store.getState();
		Store.dispatch({ type: 'CLEAR_STOCKS' });
		stocks.forEach((stock, index) => {
			this.addStockAndRequestMetrics(stock);
		});
	}

	render = () => {
		return (
			<div className="container">
				<Form handleSubmit={this.handleSubmit}/>
				<Table stockData={Store.getState()} removeStock={this.removeStock} />
				<input type="button" value="Update" onClick={this.addStockAndRequestMetrics} />
				<ToastContainer />
			</div>
		);
	}
}

export default App;
