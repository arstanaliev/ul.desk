import React from "react";
import clients2Logo from "../img/clients.png"
import clients2stars from "../img/clients2.png"
import clients2person from "../img/clients2-person.png"
import clients2Image1 from "../img/clients2-image.png";
import clients2Image2 from "../img/clients2-image2.png";
import clients2Image3 from "../img/clients2-image3.png";
import clients2Image4 from "../img/clients2-image4.png";

const Clients2 = () => {
    return (
        <section id="clients2">
            <div className="container">
                <section className="clients2">
                    <div>
                        <div>
                            <img src={clients2Logo} alt=""/>
                            <a href="" className="clients2-about">ABOUT</a>
                        </div>
                        <img src={clients2stars} alt="" className="clients2-person-image"/>
                        <p>Working with Alex was interesting. He <br/>
                            went above and beyond what I've asking <br/>
                            for and provided such an amazing design <br/>
                            for my mobile application.</p>
                        <div className="clients2-person">
                            <img src={clients2person} alt=""/>
                            <div>
                                <a href="">Steve McQuillen</a>
                                <a href="">CEO @ Vencortex</a>
                            </div>
                        </div>
                    </div>
                    <div className="clients2-texts">
                        <h1>Trusted by the fastest growing <br/>
                            digital startups</h1>
                        <div className="clients2-number">
                            <div>
                                <h2>7+</h2>
                                <h4>Years of experience</h4>
                            </div>
                            <div>
                                <h2>50+</h2>
                                <h4>Projects completed</h4>
                            </div>
                            <div>
                                <h2>30+</h2>
                                <h4>Happy clients</h4>
                            </div>
                        </div>
                        <div className="clients2-images">
                            <img src={clients2Image1} alt=""/>
                            <img src={clients2Image2} alt=""/>
                            <img src={clients2Image3} alt=""/>
                            <img src={clients2Image4} alt=""/>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}
export default Clients2