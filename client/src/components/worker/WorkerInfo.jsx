import React, { useEffect, useState } from "react";
import ModalWindow from "../ui/ModalWindow";
import Icon from "../ui/Icon"
import { useQuery } from "@apollo/client";
import { WorkerQuery } from "../../queries/queries";
import Loader from "../ui/Loader";

const WorkerInfo = ({ worker_id, active, setActive })=> {
    
    const { data, loading, error } = useQuery(WorkerQuery(worker_id, ["firstName", "lastName", "middleName", "birthday", "date"]));
    const [worker, setWorker] = useState(null);
    
    useEffect(()=> {

        if (loading || !data || error) return;

        setWorker(data.worker)

    }, [loading, data]);
    
    return (
        <ModalWindow active={ active } setActive={ setActive }>
            
            <div className="typical-modal" style={ { minWidth: 400 } }>
                
                <header className="slot justify-between mb-4">
                    <span className="font-middle">Информация о сотруднике</span>

                    <button onClick={ ()=> setActive(false) } className="subtle fab small"><Icon icon="cross" /></button>
                </header>

                { (!loading && worker) ?

                    <main className="selectable flex flex-column gap-2">
                        <h2>{ `${ worker.firstName } ${ worker.lastName } ${ worker.middleName }` }</h2>
                        <div className="flex flex-column text-muted">
                            <span>Сотрудник</span>
                            <span>Дата рождения: { worker.birthday }</span>
                            <span>Дата регистрации: { worker.date }</span>
                        </div>
                    </main>
                    
                : <div className="flex items-center justify-center"><Loader /></div> }
                
            </div>

        </ModalWindow>
    );
};

export default WorkerInfo;