import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import Loader from "../components/ui/Loader";
import Header from "../components/header/Header";
import { WokersList } from "../components/worker/Worker";
import { WokersQuery } from "../queries/queries";

const HomePage = ()=> {

    const { data, loading, error, refetch } = useQuery(WokersQuery(["id", "firstName", "lastName", "middleName"]));
    const [workers, setWorkers] = useState([]);

    function refetchData() {
        refetch();
        console.log("Workers data refetched");
    }
    
    useEffect(()=> {

        if (loading || !data.workers || error) return;
        setWorkers(data.workers);

    }, [loading, data]);
    // > Load data every 5 second
    useEffect(()=> {
        setInterval(refetchData, 5000);
    }, []);
    
    return (
        <main className="page">

            <Header />

            <section className="section flex flex-column gap-2">

                { !loading ? 
                    <>
                        <div className="slot gap-4">
                            <h1>Сотрудники</h1>
                            <h2 className="text-muted">&middot;</h2>
                            <div className="slot gap-2">


                                <button className="subtle" onClick={ ()=> refetchData() }>
                                    { !loading ?
                                        "Обновить"
                                    : <Loader /> }
                                </button>

                            </div>
                        </div>
                    
                        <WokersList workers={ workers } />
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

        </main>
    );
};

export default HomePage;