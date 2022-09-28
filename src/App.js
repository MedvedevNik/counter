import React, { useState } from 'react';

import './index.scss';

const App = () => {
	let [ count, setCount ] = useState(0);

	const increment = () => setCount(previousCount => previousCount + 1);
	const decrement = () => setCount(previousCount => previousCount - 1);
	return (
		<div className="App">
		<div>
			<h2>Счетчик:</h2>
			<h1>{count}</h1>
			<button 
				className="minus"
				onClick={decrement}>
				-
			</button>
			<button 
				className="plus"
				onClick={increment}>
				+
			</button>
		</div>
		</div>
  	);
}

export default App;
