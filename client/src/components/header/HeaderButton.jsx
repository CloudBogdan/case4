import React from "react";
import Icon from "../Icon";

const HeaderButton = props=> {
    return (
        <button className="header-button bg-gray-100 hover:bg-blue-500 mb-3 hover:text-white rounded-xl">
            
            { props.icon && <Icon icon={ props.icon } /> }

        </button>
    );
};

export default HeaderButton;