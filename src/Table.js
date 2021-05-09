import React from 'react';
import NumberFormat from 'react-number-format';

const TableHeader = () => {
	return (
		<thead>
			<tr>
				<th>Ticker Symbol</th>
				<th>Name</th>
				<th>Current Price</th>
				<th>Market Cap</th>
				<th>Book Value Trailing 12 Months</th>
				<th>Remove</th>
			</tr>
		</thead>
	);
};

const TableBody = (props) => {
	const rows = props.stockData.map((row, index) => {
		return (
		<tr key={index}>
			<td>{row.symbol}</td>
			<td>{row.companyName}</td>
			<td>
				<NumberFormat value={row.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
			</td>
			<td>
				<NumberFormat value={row.mktCap} displayType={'text'} thousandSeparator={true} prefix={'$'} />
			</td>
			<td>
				<NumberFormat value={row.bookValuePerShareTTM} displayType={'text'} thousandSeparator={true} prefix={'$'} />
			</td>
			<td>
				<button onClick={() => props.removeStock(index)}>Delete</button>
			</td>
		</tr>
		);
	});
	return <tbody>{rows}</tbody>;
};

const Table = (props) => {
	const {stockData, removeStock} = props;
	return (
		<table>
			<TableHeader />
			<TableBody stockData={stockData} removeStock={removeStock} />
		</table>
	);
};

export default Table;