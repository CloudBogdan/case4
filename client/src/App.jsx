import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router";
import Context from './Context';
import HomePage from './pages/HomePage';
import axios from "axios";

const App = ()=> {

	const [products, setProducts] = useState([]);

	useEffect(()=> {

		axios.get("http://localhost:5000/").then((res)=>
			setProducts(res.data)
		);
		
	}, []);
	
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
