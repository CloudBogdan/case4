import React, { useContext, useEffect, useState } from "react";
import Icon from "../../components/ui/Icon";
import Loader from "../../components/ui/Loader";
import HiddenLayout from "../../components/ui/HiddenLayout";
import { WorkersList } from "../../components/worker/Worker";
import Context from "../../Context";
import { useQuery } from "@apollo/client";
import { WorkersQuery } from "../../queries/queries";

const WorkersSection = ()=> {

    const { workers, setWorkers } = useContext(Context);
    // const [workers, setWorkers] = useState([]);

    const { data, loading, error, refetch } = useQuery(WorkersQuery(["id", "firstName", "lastName", "middleName", "human_id", "birthday", "date"]));

    function refetchWorkersData() {
        refetch();
        console.log("Workers data refetched");
    }
    
    // > Load data every 5 second
    useEffect(()=> {
        setInterval(refetchWorkersData, 5000);
    }, []);
    useEffect(()=> {

        if (loading || !data || error) return;
        setWorkers(data.workers);

    }, [loading, data]);
    
    return (
        <section className="section flex flex-column gap-2 height-fill">

            <HiddenLayout active={ !loading }>

                <>
                    <div className="slot gap-4">
                        <h1>Сотрудники</h1>
                        <div className="slot gap-2">


                            <button className="subtle fab small" onClick={ ()=> refetchWorkersData() }>
                                { !loading ?
                                    <Icon icon="refresh" />
                                : <Loader /> }
                            </button>

                        </div>
                    </div>
                
                    <WorkersList workers={ [...workers].reverse() } />
                </> 
            
                <div className="flex item-center justify-center">
                    <div className="col items-center">
                        <h3 className="text-muted mb-2">Получаем данные...</h3>
                        <Loader />
                    </div>
                </div>

            </HiddenLayout>

        </section>
    )
};

export default WorkersSection;