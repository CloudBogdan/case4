import React from "react";
import ToolbarButton from "./ToolbarButton";

const ToolbarLeft = ()=> {
    return (
        <aside className="toolbar toolbar-left flex flex-column gap-0">
            <ToolbarButton icon="users" title="Сотрудники" to="/workers" />
            <ToolbarButton icon="chartbar" title="Моя команда" to="/team" />
        </aside>
    );
};

export default ToolbarLeft;