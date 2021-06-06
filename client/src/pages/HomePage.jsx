import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import Loader from "../components/ui/Loader";
// import Header from "../components/header/Header";
import { WokersList } from "../components/worker/Worker";
import { WokersQuery } from "../queries/queries";
import Icon from "../components/ui/Icon";

const HomePage = ()=> {

    const { data, loading, error, refetch } = useQuery(WokersQuery(["id", "firstName", "lastName", "middleName"]));
    const [workers, setWorkers] = useState([]);

    useEffect(()=> {

        if (loading || !data.workers || error) return;
        setWorkers(data.workers);

    }, [loading, data]);
    
    return (
        <main className="page">

            <section className="section flex flex-column">

                { !loading ? 
                    <>
                        <div className="flex gap-2">

                            <button className="mb-2 subtle" onClick={ ()=> refetch() }>
                                { !loading ?
                                    "Обновить"
                                : <Loader /> }
                            </button>
                            <button className="subtle compact">
                                <Icon icon="cog" />
                            </button>

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