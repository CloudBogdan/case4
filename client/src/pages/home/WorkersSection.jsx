import { useQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import Icon from "../../components/ui/Icon";
import Loader from "../../components/ui/Loader";
import HiddenLayout from "../../components/ui/HiddenLayout";
import { WorkersList } from "../../components/worker/Worker";
import { WorkersQuery } from "../../queries/queries";
import Context from "../../Context";

const WorkersSection = ()=> {

    const { human } = useContext(Context);
    const { data, loading, error, refetch } = useQuery(WorkersQuery(["id", "firstName", "lastName", "middleName", "human_id", "birthday", "date"]));
    const [workers, setWorkers] = useState([]);

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
    
    return (
        <section className="section flex flex-column gap-2 height-fill">

            <HiddenLayout active={ !loading }>

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