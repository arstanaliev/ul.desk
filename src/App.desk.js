import React from "react";
import Section from "./components/Section";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Dishes from "./components/Dishes";
import Clients from "./components/Clients";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";


const AppDesk = () => {
    return (
        <div className="app-desk">
            <Section/>
            <Hero/>
            <AboutUs/>
            <Dishes/>
            <Clients/>
            <Subscribe/>
            <Footer/>
        </div>
    )
}

export default AppDesk