import React from "react";
import {CiSearch} from "react-icons/ci";
import {GiShoppingCart} from "react-icons/gi";
import {useState} from "react";
import {AiOutlineClose} from "react-icons/ai";
import {NavLink} from "react-router-dom";

const Header = () => {
    const [Input, setInput] = useState(false)
    return (
            <div id="header">
            <div className="container">
                <div className="header">
                    <div className="header-logo">
                        <h4>UI.desk</h4>
                    </div>
                    <div className="header-menu">
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={"/"}>About</NavLink>
                        <NavLink to={"/"}>Contact</NavLink>
                        <NavLink to={"/"}>Testimonials</NavLink>
                        <NavLink to={'/app-folio'}>Web.folio</NavLink>
                        <NavLink to={"/object"}>Imovito</NavLink>
                    </div>
                    <div className="header-buttons" style={{
                        width: Input ? '30%' : '16%'
                    }}>
                        <input type="search" className="header-input" style={{
                            display: Input ? 'block' : "none"
                        }} placeholder="search"/>
                        <h5 onClick={() => setInput(!Input)}><CiSearch style={{
                            display: Input ? "none" : 'block'
                        }} className="header-search"/></h5>
                        <h5 onClick={() => setInput(!Input)}><AiOutlineClose style={{
                            display: Input ? "block" : 'none'
                        }} className="header-search"/></h5>
                        <h5><GiShoppingCart/></h5>
                        <button className="btn-bac">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header