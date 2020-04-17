import React from 'react';
import { Link } from "react-router-dom";
import Burger from "../../assets/images/burger-w-min.png";
import Close from "../../assets/images/x-w-min.png";
import logo from "../../assets/images/main-w-logo-min.png";
import "./style.css";


function Header() {
    return (
        <div className="navbar navbar-expand-lg">
            <button className="navbar-toggler" type="button" data-toggler="collapse" data-target="#navbarNavAltMarkup">
                <img className="burger" src={Burger} alt="Burger icon" />
                <img className="close" src={Close} alt="Close icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/" className="tabs nav-item nav-link" >Home</Link>
                    <Link to="/Projects" className="tabs nav-item nav-link link-two">Projects</Link>
                    <Link to="/Contact" className="tabs nav-item nav-link link-two">Contact</Link>
                </div>
            </div>
            <Link className="navbar-brand" to="/"><img className="nav-logo" src={logo} alt="Website Logo"></img></Link>
        </div>
    );
}

export default Header;