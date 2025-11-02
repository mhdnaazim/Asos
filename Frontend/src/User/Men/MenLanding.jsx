import React from "react";
import Nav from "./Nav";
import MenBanner from "./MenBanner";
import MenCollective from "./MenCollective";
import MenNew from "./MenNew";
import MenBestSellers from "./MenBestSellers";

const MenLanding = () => {
    return(
        <>
        <Nav />
        <MenBanner />
        <MenCollective />
        <MenNew />
        <MenBestSellers />
        </>
    )
}

export default MenLanding;