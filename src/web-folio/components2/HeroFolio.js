import React from "react";
import {CgMail} from "react-icons/cg";
import HeroFolioLogo from  '../img/hero-folio-logo.png'
import Image from "../img/hero-folio-image.png"

const HeroFolio = () => {
    return (
        <section id="hero-folio">
            <div className="container">
                <section className="hero-folio">
                    <div className="hero-folio-title">
                        <h1>I design digital <br/>
                            products that <br/>
                            make an impact.</h1>
                        <h3 className="hero-folio-title-text">Hi! I’m Alex, a product designer based in Oakland. I <br/>
                            create user-friendly interfaces for fast-growing <br/>
                            startups.</h3>
                        <div>
                            <button className="folio-btn">Hire me! <CgMail className="folio-btn-icon"/></button>
                        </div>
                        <div className="hero-folio-title-address">
                            <img src={HeroFolioLogo} alt=""/>
                            <div>
                                <h2>Independent Of The Year</h2>
                                <p>Annual Awards 2020 • awwwards.com</p>
                            </div>
                        </div>
                    </div>
                    <img src={Image} alt=""/>
                </section>
            </div>
        </section>
    )
}
export default HeroFolio