import React, { useContext } from "react";
import Context from "../../Context";
import { buildName, createClassName } from "../../general";

export const Worker = props=> {

    const { human } = useContext(Context);
    
    const my_worker = props.human_id == human.id;
    
    return (
        <div onClick={ ()=> props.handle ? props.handle(props) : 0 } tabIndex="0" className="worker-item slot p-4">

            <div className="table-slot black slot">

                <div className="slot gap-4 large">

                    <div title={ my_worker ? "Это ваш сотрудник" : "Не ваш" } className={ createClassName({ "color-green": my_worker }, "bubble") } />

                    <div className="flex gap-2 selectable">
                        <div style={ { fontWeight: 600 } } className="worker-name slot">
                            { buildName(props)  }
                            <div className="middleName">&#160;{ props.middleName }</div>
                        </div>
                    </div>

                </div>

                <div className="slot">
                    <div className="small">
                        { props.birthday }
                    </div>
                    <div className="small">
                        { props.date }
                    </div>
                </div>
                
            </div>

        </div>
    );
};

export const WorkersList = ({ handle, workers })=> {
    return (
        <>
            <div className="table-slot slot p-4 bdb">
                <div className="large">Основная информация</div>
                <div className="slot">
                    <div className="small">Дата рождения</div>
                    <div className="small">Дата начала работы</div>
                </div>
            </div>
            <div className="workers-list flex flex-column scrollable">
                { workers.map((worker, index)=>
                    <Worker { ...worker } handle={ handle } index={ index } key={ worker.id } />
                ) }
            </div>
        </>
    );
}