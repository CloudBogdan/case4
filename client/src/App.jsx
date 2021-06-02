import React from 'react';
import { Route, Switch } from "react-router";
import Context from './Context';
import HomePage from './pages/HomePage';

const App = ()=> {
	
	return (
		<Context.Provider value={ { products } }>
			<div className="app">
				
				<Switch>

					<Route path="/" exact component={ HomePage } />

				</Switch>

			</div>
		</Context.Provider>
	);
}

export default App;
