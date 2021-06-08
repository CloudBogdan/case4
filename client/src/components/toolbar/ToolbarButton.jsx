import React from "react";
import { createClassName } from "../../general";
import Icon from "../ui/Icon";

const ToolbarButton = ({ icon, active, title })=> {
    return (
        <button className={ createClassName({ "active": active }, "toolbar-button") } title={ title || "" }>
            <Icon icon={ icon } />
        </button>
    )
};

export default ToolbarButton;