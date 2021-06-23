import React, { useContext } from "react";
import ModalWindow from "../ui/ModalWindow";
import Icon from "../ui/Icon"
import Loader from "../ui/Loader";
import Context from "../../Context";
import { compareId } from "../../general";
import HiddenLayout from "../ui/HiddenLayout";

const WorkerInfo = ({ worker_id, active, setActive })=> {
    
    const { workers, human } = useContext(Context);
    const worker = workers.filter(w=> compareId(w.id, worker_id))[0];
    
    return (
        <ModalWindow active={ active } setActive={ setActive }>
            
            <div className="typical-modal" style={ { minWidth: 500, maxWidth: 600 } }>
                
                <header className="slot justify-between mb-2">
                    <span className="font-middle">Информация о сотруднике</span>

                    <button onClick={ ()=> setActive(false) } className="subtle fab small"><Icon icon="cross" /></button>
                </header>

                { worker ?
                    <main className="selectable flex flex-column gap-4">

                        <div className="flex flex-column">
                            <h2>{ `${ worker.firstName } ${ worker.lastName } ${ worker.middleName }` }</h2>
                            <HiddenLayout active={ compareId(worker.human_id, human?.id) }>
                                <span className="text-blue">Ваш сотрудник</span>
                                <span className="text-muted">Сотрудник</span>
                            </HiddenLayout>
                        </div>
                        
                        <div className="col">
                            <span className="label">Прочая информация</span>
                            <div className="flex flex-column">
                                <span>Дата рождения: { worker.birthday }</span>
                                <span>Дата регистрации: { worker.date }</span>
                            </div>
                        </div>
                        
                    </main>
                :
                    <h2>Что-то пошло не так!</h2>
                }
                
            </div>

        </ModalWindow>
    );
};

export default WorkerInfo;