import React from "react";
import Calendar from "../calendar/Calendar";

const ToolbarRight = ()=> {
    return (
        <aside className="toolbar toolbar-right">
            
            <div className="flex flex-column gap-2 height-fill">
                <h3 className="label">Календарь ближайших подарков</h3>
                <Calendar />
            </div>

        </aside>
    );
};

export default ToolbarRight;