import React from "react";
import Header from "../../components/header/Header";
import ToolbarRight from "../../components/toolbar/ToolbarRight";
import { Page } from "../Page";
import ToolbarLeft from "../../components/toolbar/ToolbarLeft";
import WorkersSection from "./WorkersSection";

const HomePage = props=> {

    const page_type = props.match.params.page;
    
    const SectionFilter = ()=> {
        switch (page_type) {
            case "workers":
                return <WorkersSection />
            case "team":
                return <h1>My team</h1>
            default:
                return <WorkersSection />
        }
    }
    
    return (
        <Page className="flex flex-row justify-between">
            <ToolbarLeft />

            <main className="flex flex-column width-fill">

                <Header />

                <SectionFilter />

            </main>

            <ToolbarRight />

        </Page>
    );
};

export default HomePage;