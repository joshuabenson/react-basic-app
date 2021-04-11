import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Render a `<Provider>` around the entire `<App>`,
// and pass the Redux store to as a prop
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
