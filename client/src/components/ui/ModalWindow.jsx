import React, { useEffect, useRef } from "react";
import { createClassName } from "../../general";

const ModalWindow = ({ active, setActive, children })=> {

    const
        modal_ref = useRef(),
        modal_wrapper_ref = useRef();
    
    useEffect(()=> {

        if (!modal_wrapper_ref.current) return;
        
        modal_wrapper_ref.current.addEventListener("click", event=> {
            if (!modal_ref.current || modal_ref.current.contains(event.target) && !active) return;
            setActive(false);
        });
        
    }, []);
    
    return (
        <div ref={ modal_wrapper_ref } className={ createClassName({ "active": active }, "modal-window-wrapper") }>
                
            <div ref={ modal_ref } className="modal-window">
                { children }
            </div>

        </div>
    );
};

export default ModalWindow;