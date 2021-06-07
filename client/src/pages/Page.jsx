import React from "react";
import { createClassName } from "../general";

export const Page = ({ children, className })=> {
    return (
        <main className={ createClassName(className, "page") }>
            { children }
        </main>
    );
};