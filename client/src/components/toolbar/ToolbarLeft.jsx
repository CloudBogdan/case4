import React from "react";
import ToolbarButton from "./ToolbarButton";

const ToolbarLeft = ()=> {
    return (
        <aside className="toolbar toolbar-left">
            <ToolbarButton icon="users" active title="Сотрудники" />
            <ToolbarButton icon="chartbar" title="Моя команда" />
        </aside>
    );
};

export default ToolbarLeft;