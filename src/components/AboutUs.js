import React from "react";
import image1 from '../img/Image 01.png'
import image2 from '../img/Image 02.png'
import image3 from '../img/Image 03.png'
import image4 from '../img/Image 04.png'
import image5 from '../img/Image 05.png'
import {BsCheckSquareFill} from "react-icons/bs";

const AboutUs = () => {
    return (
        <div id="aboutUS">
            <div className="container">
                <div className="aboutUs">
                    <div className="aboutUs-Us">
                        <div className="aboutUs-title">
                            <h1 className="p54">About US</h1>
                            <p className="p22">
                                Organic food is grown without the use of <br/>
                                synthetic chemicals, such as human-made <br/>
                                pesticides and fertilizers, and does not contain <br/>
                                genetically modified organisms (GMOs). <br/>
                                Organic foods include fresh produce, meats, <br/>
                                and dairy products as well as processed foods <br/>
                                such as crackers, drinks, and frozen meals.
                            </p>
                            <div>
                                <button>Learn More</button>
                            </div>
                        </div>
                        <div className="aboutUs-images">
                            <div>
                                <img src={image1} alt=""/>
                                <img src={image2} alt=""/>
                            </div>
                            <img src={image3} alt=""/>
                        </div>
                    </div>
                    <div className="aboutUs-Us">
                        <div>
                            <img src={image4} alt=""/>
                        </div>
                        <div className="aboutUs-title">
                            <h1 className="p54">Fresh Vegetables <br/>
                                Every Day</h1>
                            <p className="p22">
                                Healthy life as informed declared we enjoy the <br/>
                                margaret. Joy horrible moreover man feelings <br/>
                                own shy. Request norland neither mistake for yet. <br/>
                                Between the for morning assured country believe.
                            </p>
                            <div>
                                <button>Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="aboutUs-Us">
                        <div className="aboutUs-title">
                            <h1 className="p54">Cooked by the <br/>
                                Best Chefs</h1>
                            <p className="p22">
                                Believing neglected so so allowance existence <br/>
                                departure in. In design active temper be <br/>
                                uneasy. Thirty for remove plenty regard you <br/>
                                summer though. He preference connection <br/>
                                astonished on of ye.
                            </p>
                            <p className="p20"><span><BsCheckSquareFill/></span>  A guaranteed delicious meal</p>
                            <p className="p20"><span><BsCheckSquareFill/></span>  Food is guaranteed hygienic</p>
                            <p className="p20"><span><BsCheckSquareFill/></span>    Cooked quickly</p>
                        </div>
                        <div>
                            <img src={image5} alt=""/>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default AboutUs