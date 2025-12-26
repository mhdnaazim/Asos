import React from "react";
import Nav from "./Nav";
import MenBanner from "./MenBanner";
import MenCollective from "./MenCollective";
import MenNew from "./MenNew";
import MenBestSellers from "./MenBestSellers";
import MenBrands from "./MenBrands";
import Social from "./Social";
import Footer from "./Footer";
import { useRef } from "react";

const MenLanding = () => {

    const bestSellerRef = useRef(null);

    const scrollToBestSellers = () => {
        bestSellerRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center"
        })
    }

    return (
        <>
            <Nav onClothingClick={scrollToBestSellers} />
            <MenBanner />
            <MenCollective />
            <MenNew />
            <div ref={bestSellerRef}>
                <MenBestSellers />
            </div>
            <MenBrands />
            <Social />
            <Footer />
        </>
    )
}

export default MenLanding;