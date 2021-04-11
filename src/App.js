import React, {Component} from 'react';
import Store from './Store';
import Table from './Table';
import Form from './Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {

	state = Store.getState();

	updateStateFromStore = () => {
		this.setState(Store.getState())
	};

  	componentDidMount() {
    	this.unsubscribeStore = Store.subscribe(this.updateStateFromStore);
  	}

  	componentWillUnmount() {
    	this.unsubscribeStore();
  	}

	removeStock = (index) => {
		Store.dispatch({ type: 'REMOVE_STOCK', index: index });
	};

	handleSubmit = (stock) => {
		const fetchStockData = (stock) => {
			fetch('https://financialmodelingprep.com/api/v3/profile/' + stock.symbol.toUpperCase() + '?apikey=ea4063dd504a48c85e6a945bf8918972')
				.then((result) => result.json())
				.then((result) => {
				if (result[0]) {
					fetch('https://financialmodelingprep.com/api/v3/key-metrics-ttm/' + stock.symbol.toUpperCase() + '?apikey=ea4063dd504a48c85e6a945bf8918972')
					.then((keyMetricsResult) => keyMetricsResult.json())
					.then((keyMetricsResult) => {
					result = {...result[0], ...keyMetricsResult[0]};
					Store.dispatch({ type: 'ADD_STOCK', object: result });
					});
				} else {
					toast("Symbol " + stock.symbol.toUpperCase() + " not found");
				}
			});
		};
		fetchStockData(stock);
	};

	handleUpdate = () => {
		let stocks = Store.getState();
		Store.dispatch({ type: 'CLEAR_STOCKS' });
		stocks.forEach((stock, index) => {
			this.handleSubmit(stock);
		});
	};

	render() {
		return (
		<div className="container">
			<Form handleSubmit={this.handleSubmit}/>
			<Table stockData={Store.getState()} removeStock={this.removeStock} />
			<input type="button" value="Update" onClick={this.handleUpdate} />
			<ToastContainer />
		</div>
		);
	};
};

export default App;
