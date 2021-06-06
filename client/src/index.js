import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
// import "./scss/tailwind.css";
import "./scss/style.scss";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={ client }>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>,
	document.getElementById('root')
);

reportWebVitals();
