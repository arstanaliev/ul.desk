import React from "react";
import heroImg from '../img/Icon.png'
import heroImg1 from '../img/Icon (1).png'
import heroImg2 from '../img/Icon(2).png'

const Hero = () => {
    return (
        <div id="hero">
            <div className="container">
                <div className="hero">
                    <div className="hero-texts">
                        <h1 className="p54C">Why Choose US?</h1>
                        <div className="p24">Organic food is grown without the use of synthetic chemicals</div>
                    </div>
                    <div className="hero-title">
                        <div>
                            <img src={heroImg} alt=""/>
                            <h1 className="p28">Easy to order</h1>
                            <p className="p18">foods include fresh produce, <br/>
                                meats as well as processed</p>
                        </div>
                        <div>
                            <img src={heroImg1} alt=""/>
                            <h1 className="p28">Live Order</h1>
                            <p className="p18">Place your online Order easily <br/>
                                and get the food instantly</p>
                        </div>
                        <div>
                            <img src={heroImg2} alt=""/>
                            <h1 className="p28">100% Organic</h1>
                            <p className="p18">Organic food is grown without <br/>
                                the use of synthetic chemicals</p>
                        </div>
                    </div>
                    <div className="hero-partner">
                        <div>
                            <h1 className="p44">40+</h1>
                            <p className="p20">Food Partners</p>
                        </div>
                        <div>
                            <h1 className="p44">459+</h1>
                            <p className="p20">Trusted Clients</p>
                        </div>
                        <div>
                            <h1 className="p44">12k+</h1>
                            <p className="p20">Order Online</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero