import React from "react";
import Icon from "../ui/Icon";
import { NavLink } from "react-router-dom";

const ToolbarButton = ({ icon, title, to })=> {
    return (
        <NavLink activeClassName="active" to={ `/dashboard${ to }` } className="button toolbar-button ghost" title={ title || "" }>
            <Icon icon={ icon } />
            <span>{ title }</span>
        </NavLink>
    )
};

export default ToolbarButton;