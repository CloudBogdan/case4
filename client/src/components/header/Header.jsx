import React from "react";
import Icon from "../ui/Icon";

const Header = ()=> {
    return (
        <header className="header">

            <b>Epam HR system</b>

            <button title="Вы вошли как HR" className="slot-button subtle">
                <Icon icon="bag" />
                Дмитрий Никитов
            </button>

        </header>
    );
};

export default Header;