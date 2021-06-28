import React, { useContext } from "react";
import Context from "../../Context";
import { buildName, createClassName, dateToString, formatDate } from "../../general";
import Icon from "../ui/Icon";

const CalendarItem = props=> {

    const { showWorkerInfo } = useContext(Context);
    const
        is_near = new Date(Date.now()).getTime() >= formatDate(props.date).getTime() - 172800000 + 518400000,
        is_miss = new Date(Date.now()).getTime() >= formatDate(props.date).getTime() + 518400000;
    
    return is_near && (
        <div onClick={ ()=> showWorkerInfo(props.id) } className={ createClassName({ "is-near": is_near, "is-miss": is_miss }, "calendar-item p-4 flex flex-column clickable") }>

            <div className="slot gap-4">
                <span className="text-muted"><Icon icon="user" /></span>
                <span style={ { fontWeight: 600 } }>
                    { buildName(props) }
                </span>
            </div>
            <div className="flex flex-column">
                <span className="label">Выдача заплонированна на <br /><span className="text-black">{ dateToString(props.date, 518400000) }</span></span>
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