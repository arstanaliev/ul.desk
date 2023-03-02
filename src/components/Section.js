import React from "react";
import sectionImg from '../img/imageSection.png'
const Section = () => {
    return (
        <div id="section">
            <div className="container">
                <div className="section">
                    <div className="section-texts">
                        <h1>Just <span>Eat healthy</span> <br/>
                            food to live a <br/>
                            healthier life</h1>
                        <p>
                            Enjoy a healthy life by eating healthy foods <br/>
                            that have extraordinary flavors that make <br/>
                            your life healthier for today and in the future
                        </p>
                        <button>Order Now</button>
                    </div>
                    <img src={sectionImg} alt=""/>
                </div>
            </div>
        </div>
    )
}
export default Section