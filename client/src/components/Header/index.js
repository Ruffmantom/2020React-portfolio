import React from 'react';
import { Link } from "react-router-dom";
import burger from "../../assets/images/burger-w-min.png";
import close from "../../assets/images/x-w-min.png";
import logo from "../../assets/images/main-w-logo-min.png";


function Header() {
    return (
        <div className="navbar navbar-expand-lg">
            <button className="navbar-toggler" type="button" data-toggler="collapse" data-target="#navbarNavAltMarkup">
                <image className="burger" src={burger} alt="Burger icon" />
                <image className="close" src={close} alt="Close icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/" className="tabs" {...window.location.pathname === "/" || window.location.pathname === "Home" ? "nav-link active": "nav-link"}>Home<span className="sr-only">(...current)</span></Link>
                    <Link to="/Projects" className="tabs nav-item link-two"{...window.location.pathname === "/Projects"? "nav-link active": "nav-link"} >Projects</Link>
                    <Link to="/Contact" className="tabs nav-item link-two" {...window.location.pathname === "/Contact"? "nav-link active": "nav-link"}>Contact</Link>
                </div>
            </div>
            <Link className="navbar-brand" to="/"><img className="nav-logo" src={logo} alt="Website Logo"></img></Link>
        </div>


    );
}

export default Header;