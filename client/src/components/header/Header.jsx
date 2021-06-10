import React from "react";
import Icon from "../ui/Icon";
import Logo from "../../imgs/logo_white-blue.svg"

const Header = ()=> {
    return (
        <header className="header">
            
            <div className="slot gap-2">
                <img src={ Logo } alt="logo" />
                <b style={{ whiteSpace: "nowrap" }}>HR system</b>
            </div>

            <button title="Вы вошли как HR" className="slot-button subtle flex gap-2">
                <Icon icon="bag" />
                <span>Дмитрий Никитов</span>
            </button>

        </header>
    );
};

export default Header;