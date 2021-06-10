import React from 'react';
import { Redirect, Route, Switch } from "react-router";
import Context from './Context';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/LoginPage';

const App = ()=> {
	
	return (
		<Context.Provider value={ {  } }>
			<div className="app">
				
				<Switch>

					{/* <Router from="/" to="/dashboard" /> */}
					<Route path="/dashboard/:page" component={ HomePage } />
					<Route path="/login" component={ LoginPage } />

					<Route path="/" exact>
						<Redirect to="/dashboard" />
					</Route>

				</Switch>

			</div>
		</Context.Provider>
	);
}

export default App;
