import React from "react";
import Icon from "../ui/Icon";

export const Worker = props=> {
    return (
        <div onClick={ ()=> props.handle(props) } tabIndex="0" className="worker-item slot justify-between p-4">

            <div className="flex gap-4">

                <span className="text-muted">{ `${ props.index + 1 }.` }</span>

                <Icon icon="user" />

                <div className="flex gap-2 selectable">
                    <div style={ { fontWeight: 600 } } className="worker-name slot">
                        { `${ props.firstName } ${ props.lastName }`  }
                        <div className="middleName">&#160;{ props.middleName }</div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export const WorkersList = ({ handle, workers })=> {
    return (
        <div className="workers-list flex flex-column gap-0">
            { workers.map((worker, index)=>
                <Worker { ...worker } handle={ handle } index={ index } key={ worker.id } />
            ) }
        </div>
    );
}