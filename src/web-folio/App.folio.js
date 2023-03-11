import React from "react";
import HeroFolio from "./components2/HeroFolio"
import Clients2 from "./components2/Clients2";
import Work from "./components2/Work";

const AppFolio = () => {
    return (
        <div className="app-folio">
            <HeroFolio/>
            <Clients2/>
            <Work/>
        </div>
    )
}

export default AppFolio