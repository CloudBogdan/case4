import React from "react";
import HeaderButton from "./HeaderButton";

const Header = ()=> {
    return (
        <header className="header p-3">

            <HeaderButton icon="clipboard" />
            <HeaderButton icon="users" />
            <HeaderButton />

        </header>
    );
};

export default Header;