import React, { useState } from 'react';
import { Redirect, Route, Switch } from "react-router";
import Context from './Context';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/LoginPage';

const App = ()=> {

	const [human, setHuman] = useState(null);
	
	return (
		<Context.Provider value={ { human, setHuman } }>
			<div className="app">
				
				<Switch>

					{/* <Router from="/" to="/dashboard" /> */}
					<Route path="/dashboard" component={ HomePage } />
					<Route path="/login" component={ LoginPage } />

					<Route path="/" exact>
						<Redirect to="/login" />
					</Route>

				</Switch>

			</div>
		</Context.Provider>
	);
}

export default App;
