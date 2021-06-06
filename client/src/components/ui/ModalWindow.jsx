import React, { useEffect, useRef } from "react";
import { createClassName } from "../../general";

const ModalWindow = ({ active, setActive, children })=> {

    // const modal_ref = useRef();
    
    // useEffect(()=> {

    //     document.addEventListener("click", event=> {

    //         console.log(modal_ref.current);
    //         if (!modal_ref.current || modal_ref.current.contains(event.target) && !active) return;

    //         setActive(false);

    //     })
        
    // }, []);
    
    return (
        <div className={ createClassName({ "active": active }, "modal-window-wrapper") }>
                
            <div className="modal-window">
                { children }
            </div>

        </div>
    );
};

export default ModalWindow;