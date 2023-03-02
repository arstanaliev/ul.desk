import React from "react";
import {CiSearch} from "react-icons/ci";
import {GiShoppingCart} from "react-icons/gi";

const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="header-logo">
                        <h4>UI.desk</h4>
                    </div>
                    <div className="header-menu">
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                        <a href="">Testimonials</a>
                    </div>
                    <div className="header-buttons">
                        <h5><CiSearch/></h5>
                        <h5><GiShoppingCart/></h5>
                        <button>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header