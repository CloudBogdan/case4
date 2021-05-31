import React from 'react';
import { Route, Switch } from "react-router";
import HomePage from './pages/HomePage';

const App = ()=> {
	return (
		<div className="app">
			
			<Switch>

				<Route path="/" exact component={ HomePage } />

			</Switch>

		</div>
	);
}

export default App;
