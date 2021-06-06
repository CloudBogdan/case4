import React from "react";
import Icon from "../ui/Icon";
import Loader from "../ui/Loader";

export const Worker = props=> {
    return (
        <div tabIndex="0" className="worker-item slot justify-between p-4">

            <div className="flex gap-4">

                <span className="text-muted">{ `${ props.index + 1 }.` }</span>

                <Icon icon="user" />

                <div className="flex gap-2">
                    <b className="worker-name flex">
                        { `${ props.firstName } ${ props.lastName }`  }
                        <div className="middleName">&#160;{ props.middleName }</div>
                    </b>
                </div>

            </div>

        </div>
    );
};

export const WokersList = ({ workers })=> {
    return (
        <div className="workers-list flex flex-column">
            { workers.map((worker, index)=>
                <Worker { ...worker } index={ index } key={ worker.id } />
            ) }
        </div>
    );
}