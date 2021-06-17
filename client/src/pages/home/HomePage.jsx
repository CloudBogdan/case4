import React, { useContext } from "react";
import { Redirect } from "react-router";
import Header from "../../components/header/Header";
import ToolbarRight from "../../components/toolbar/ToolbarRight";
import HiddenLayout from "../../components/ui/HiddenLayout";
import Context from "../../Context";
import { Page } from "../Page";
import WorkersSection from "./WorkersSection";

const HomePage = ()=> {
    
    const { human } = useContext(Context);
    
    return (
        <Page>

            <HiddenLayout active={ human }>

                <>
                    <main className="flex flex-column width-fill height-fill">

                        <Header />

                        <WorkersSection />

                    </main>

                    <ToolbarRight />
                </>

                <Redirect to="/login" />

            </HiddenLayout>

        </Page>
    );
};

export default HomePage;