import React, { useContext, useEffect, useState } from "react";
import Context from "../../Context";
import { buildName, createClassName, dateToString, formatDate } from "../../general";
import Icon from "../ui/Icon";
import HiddenLayout from "../ui/HiddenLayout";
import Loader from "../ui/Loader";

const CalendarItem = props=> {
    
    const { showWorkerInfo } = useContext(Context);
    const
        [is_sent, setIsSent] = useState(false),
        [sending, setSending] = useState(false);

    useEffect(()=> {

        const t = setTimeout(()=> {

            setSending(false);
            setIsSent(true);

        }, Math.random() * (3000 - 1000) + 1000);

        if (!sending)
            clearTimeout(t);
        
    }, [sending, is_sent]);

    return (
        <div className={ createClassName({ "is-near": props.is_near && !is_sent, "is-miss": props.is_miss && !is_sent }, "calendar-item p-4 flex flex-column clickable") }>

            <main className="flex flex-column" onClick={ ()=> showWorkerInfo(props.id) }>
                <div className="slot gap-2">
                    <span className="text-muted icon"><Icon icon="user" /></span>
                    <span className="name" style={ { fontWeight: 600 } }>
                        { buildName(props) }
                    </span>
                </div>
                <div className="flex flex-column">
                    <span className="label">Выдача заплонированна на <br /><span className="text-black">{ dateToString(props.date, 0) }</span></span>
                </div>
            </main>
            { props.is_near &&
                (!is_sent ?
                    <button onClick={ ()=> !is_sent ? setSending(true) : 0 } className="small">
                        <HiddenLayout active={ sending }>
                            <div className="slot gap-2">
                                <Loader />
                                <span>Отправка...</span>
                            </div>
                            <span>Выслать</span>
                        </HiddenLayout>
                    </button>
                :
                    <span className="text-muted">Отправленно!</span>)
            }

        </div>
    )
};

const Calendar = ()=> {
    
    const { workers, myWorkers } = useContext(Context);
    const [showNearOnly, setShowNearOnly] = useState(true);
    
    return (
        <div className="flex flex-column gap-1 calendar height-fill">

            <div className="flex flex-column gap-2 mb-4">
                <h3 className="label">Календарь подарков</h3>
                <label className="slot">
                    <input checked={ showNearOnly } onChange={ ()=> setShowNearOnly(!showNearOnly) } type="checkbox" />
                    <span className="label mb-0">Отображать всех сотрудников</span>
                </label>
            </div>

            { myWorkers(workers).map(worker=> {

                const
                    is_near = Date.now() >= formatDate(worker.date).getTime() + new Date("1970-01-04").getTime(),
                    is_miss = Date.now() >= formatDate(worker.date).getTime() + new Date("1970-01-06").getTime();
                
                if (!is_near && !showNearOnly) return;

                return <CalendarItem { ...worker } key={ worker.id } is_near={ is_near } is_miss={ is_miss } />
            }) }

        </div>
    ); 
};

export default Calendar;