import React from 'react';
import { Route, Switch } from "react-router";
import Context from './Context';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

const App = ()=> {
	
	return (
		<Context.Provider value={ {  } }>
			<div className="app">
				
				<Switch>

					{/* <Router from="/" to="/dashboard" /> */}
					<Route path="/dashboard" component={ HomePage } />
					<Route path="/login" component={ LoginPage } />

				</Switch>

			</div>
		</Context.Provider>
	);
}

export default App;
