import React from "react";
import dishes1 from "../img/dishes-image.png"
import dishes2 from "../img/dishes-image2.png"
import dishes3 from "../img/dishes-image3.png"

const Dishes = () => {
    return (
        <div id="dishes">
            <div className="container">
                <div className="dishes">
                    <div>
                        <h1 className="p54C">Special Dishes for you</h1>
                        <p className="p24">Made with premium & 100% Organic ingredients</p>
                    </div>
                    <div className="dishes-images">
                        <div>
                            <img src={dishes1} alt=""/>
                            <h1 className="p30">Green Salad</h1>
                            <p className="p18">
                                A salad combined witha delicious <br/>
                                cut of bacon and mixed with tasty <br/>
                                and fresh sesome oil.
                            </p>
                        </div>
                        <div>
                            <img src={dishes2} alt=""/>
                            <h1 className="p30">Beef Salad</h1>
                            <p className="p18">
                                A salad combined witha delicious <br/>
                                cut of bacon and mixed with tasty <br/>
                                and fresh sesome oil.
                            </p>
                        </div>
                        <div>
                            <img src={dishes3} alt=""/>
                            <h1 className="p30">Nut Salad</h1>
                            <p className="p18">
                                A salad combined witha delicious <br/>
                                cut of bacon and mixed with tasty <br/>
                                and fresh sesome oil.
                            </p>
                        </div>
                    </div>
                    <div className="dishes-btn">
                        <button>View All</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dishes