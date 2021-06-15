import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import Icon from "../../components/ui/Icon";
import Loader from "../../components/ui/Loader";
import { WorkersList } from "../../components/worker/Worker";
import WorkerInfo from "../../components/worker/WorkerInfo";
import { WorkersQuery } from "../../queries/queries";

const WorkersSection = ()=> {

    const { data, loading, error, refetch } = useQuery(WorkersQuery(["id", "firstName", "lastName", "middleName", "human_id"]));
    const [workers, setWorkers] = useState([]);
    const 
        [show_worker_info, setShowWorkerInfo] = useState(false),
        [current_worker_id, setCurrentWorkerId] = useState("");

    function refetchData() {
        refetch();
        console.log("Workers data refetched");
    }
    
    useEffect(()=> {

        if (loading || !data || error) return;
        setWorkers(data.workers);

    }, [loading, data]);
    // > Load data every 5 second
    useEffect(()=> {
        setInterval(refetchData, 5000);
    }, []);
    
    return <>
        <section className="section flex flex-column gap-2">

            { !loading ? 
                <>
                    <div className="slot gap-4">
                        <h1>Сотрудники</h1>
                        <div className="slot gap-2">


                            <button className="subtle fab small" onClick={ ()=> refetchData() }>
                                { !loading ?
                                    <Icon icon="refresh" />
                                : <Loader /> }
                            </button>

                        </div>
                    </div>
                
                    <WorkersList handle={ props=> {
                        setShowWorkerInfo(true)
                        setCurrentWorkerId(props.id)
                    } } workers={ [...workers].reverse() } />
                </> 
            : 
                <div className="flex item-center justify-center">
                    <div className="flex flex-column items-center">
                        <h3 className="text-muted mb-2">Получаем данные...</h3>
                        <Loader />
                    </div>
                </div>
            }

        </section>
        <WorkerInfo worker_id={ current_worker_id } active={ show_worker_info } setActive={ setShowWorkerInfo } />
    </>
};

export default WorkersSection;