import React from 'react';
import "./style.css";
import burger from "../../assets/images/burger-w-min.png";
import close from "../../assets/images/x-w-min.png";
import logo from "../../assets/images/main-w-logo-min.png";

function Header() {
    return (
        <div className="navbar navbar-expand-lg">
            <button className="navbar-toggler" type="button" data-toggler="collapse" data-target="#navbarNavAltMarkup">
                <image className="burger" src={burger} />
                <image className="close" src={close} />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a href="/" className="tabs nav-item nav-link active">Home<span className="sr-only">(current)</span></a>
                    <a href="/Projects" className="tabs nav-item nav-link link-two">Projects</a>
                    <a href="/Contact" className="tabs nav-item nav-link link-three">Contact</a>
                </div>
            </div>
            <a className="navbar-brand" href="/"><image className="nav-logo" src={logo}></image></a>
        </div>
    )
};

export default Header;