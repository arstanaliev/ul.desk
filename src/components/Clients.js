import React from "react";
import clients1 from "../img/clients-image.png"
import clients2 from "../img/clients-image2.png"
import {ImQuotesLeft} from "react-icons/im";
import {BsArrowLeft} from "react-icons/bs";
import {BsArrowRight} from "react-icons/bs";
const Clients = () => {
    return (
        <div id="clients">
            <div className="container">
                <div className="clients">
                    <h1 className="p54C">Happy Clients Says</h1>
                <div className="slider">
                    <div className="slider-line">
                        <div className="slider-line-title">
                            <div className="slider-line-texts">
                                <div>
                                    <img src={clients1} alt=""/>
                                </div>
                                <div>
                                    <h1 className="p20">KHALIL NAZIR</h1>
                                    <p className="p17">CEO of UI.Desk</p>
                                </div>
                                <div>
                                    <h2><ImQuotesLeft/></h2>
                                </div>
                            </div>
                            <p>Thirty for remove plenty regard you summer though <br/>
                                . He preference Partiality on or continuing in particular <br/>
                                principles as. Do believing oh disposing to supported <br/>
                                allowance we.</p>
                        </div>
                        <div className="slider-line-title">
                            <div className="slider-line-texts">
                                <div>
                                    <img src={clients2} alt=""/>
                                </div>
                                <div>
                                    <h1 className="p20">ZEESHAN ANWER</h1>
                                    <p className="p17">CEO of UI.Desk</p>
                                </div>
                                <div>
                                    <h2><ImQuotesLeft/></h2>
                                </div>
                            </div>
                            <p>
                                Really boy law county she unable her sister. Feet you <br/>
                                off its like like six. Among sex are leave law built now. <br/>
                                In built table in an rapid blush. Merits behind on afraid <br/>
                                or warmly.
                            </p>
                        </div>
                    </div>
                </div>
                    <div className="clients-arrow">
                        <h3><BsArrowLeft/></h3>
                        <h3><BsArrowRight/></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Clients