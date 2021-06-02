import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Section = ({ children, color })=> {

    const [ref, in_view, entery] = useInView({
        threshold: .3
    });

    useEffect(()=> {

        if (!in_view) return;

        const body = document.body;
        
        body.className = color;
        
    }, [in_view]);
    
    return (
        <section ref={ ref } className="section">
            { children }
        </section>
    )
}

export default Section;