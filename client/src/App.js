import React from 'react';
import { Route, Switch } from "react-router"

const App = ()=> {
	return (
		<div className="app">
			
			{/* <Switch> */}

				<Route path="/" exact component={ ()=> <h1>GG easy</h1> } />

			{/* </Switch> */}

		</div>
	);
}

export default App;
