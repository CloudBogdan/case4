import React, { useContext } from "react";
import Context from "../../Context";
import { buildName, dateToString } from "../../general";
import Icon from "../ui/Icon";

const CalendarItem = props=> {

    const { showWorkerInfo } = useContext(Context);
    
    return (
        <div onClick={ ()=> showWorkerInfo(props.id) } className="calendar-item p-4 flex flex-column clickable">

            <div className="slot gap-4">
                <span className="text-muted"><Icon icon="user" /></span>
                <span style={ { fontWeight: 600 } }>
                    { buildName(props) }
                </span>
            </div>
            <div className="flex flex-column">
                <span className="label">Выдача заплонированна на</span>
                <h3>{ dateToString(props.date) }</h3>
            </div>

        </div>
    )
};

const Calendar = ()=> {

    const { workers, myWorkers } = useContext(Context);
    
    return (
        <div className="flex flex-column gap-1 calendar scrollable height-fill">

            { myWorkers(workers).map(worker=>
                <CalendarItem { ...worker } key={ worker.id } />
            ) }

        </div>
    ); 
};

export default Calendar;