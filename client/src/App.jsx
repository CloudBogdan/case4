import React, { useState } from 'react';
import { Redirect, Route, Switch } from "react-router";
import Context from './Context';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/LoginPage';
import WorkerInfo from "./components/worker/WorkerInfo";

const App = ()=> {

	const [human, setHuman] = useState(null);
    const [workers, setWorkers] = useState([]);
    const [worker_info, setWorkerInfo] = useState({
        active: false,
        worker_id: null
    });

    function myWorkers(workers) {
        if (!human) return [];
        return workers.filter(w=> w.human_id == human.id);
    }
    function showWorkerInfo(worker_id) {
        setWorkerInfo({ active: true, worker_id });
    }
	
	return (
		<Context.Provider value={ {
            human, setHuman,
            workers, setWorkers, myWorkers,
            showWorkerInfo
        } }>
			<div className="app">
				
				<Switch>

					{/* <Router from="/" to="/dashboard" /> */}
					<Route path="/dashboard" component={ HomePage } />
					<Route path="/login" component={ LoginPage } />

					<Route path="/" exact>
						<Redirect to="/login" />
					</Route>

				</Switch>

                <WorkerInfo { ...worker_info } setActive={ v=> setWorkerInfo({ ...worker_info, active: v }) } />

			</div>
		</Context.Provider>
	);
}

export default App;
