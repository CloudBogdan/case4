import React from "react";
import Section from "../components/Section";

const HomePage = ()=> {
    return (
        <main className="page">

            <Section color="red">
                Red!
            </Section>
            <Section color="blue">
                Blue!
            </Section>
            <Section color="green">
                Green!
            </Section>

        </main>
    );
};

export default HomePage;