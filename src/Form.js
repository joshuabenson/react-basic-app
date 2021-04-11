import React, {Component} from 'react';

class Form extends Component {
	
	initialState = {
		symbol: ''
	};
  	state = this.initialState;
  
	handleChange = (event) => {
		const {name, value} = event.target;
		// set the state to the form value
		this.setState({
			[name]: value,
		});
	};

	submitForm = () => {
		this.props.handleSubmit(this.state);
		// clear the state
		this.setState(this.initialState);
	};

	render() {
		const {symbol} = this.state;
		return (
			<form>
				<label htmlFor="name">Enter a Ticker Symbol</label>
				<input
					type="text"
					name="symbol"
					id="symbol"
					value={symbol}
					onChange={this.handleChange} />
				<input type="button" value="Submit" onClick={this.submitForm} disabled={!this.state.symbol} />
			</form>    
		);
  	};
};
export default Form;
