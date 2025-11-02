import React from "react";
import Nav from "./Nav";
import MenBanner from "./MenBanner";
import MenCollective from "./MenCollective";
import MenNew from "./MenNew";
import MenBestSellers from "./MenBestSellers";
import MenBrands from "./MenBrands";
import Social from "./Social";
import Footer from "./Footer";

const MenLanding = () => {
    return(
        <>
        <Nav />
        <MenBanner />
        <MenCollective />
        <MenNew />
        <MenBestSellers />
        <MenBrands />
        <Social />
        <Footer />
        </>
    )
}

export default MenLanding;