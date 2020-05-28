import React from "react";
import { Link } from "react-router-dom";
import github from "../../assets/images/github-min.png";
import linkedIn from "../../assets/images/linkedin-icon-min.png";
import logo from "../../assets/images/logo-big-min.png";


function Footer() {
    return (
    <div className="footer row">
        <div className="foot-icons">
            <a className="iconsLink" href="/">
                <img className="icons" src={logo} alt="Ruff web development logo"></img>
            </a>
        
            <a className="iconsLink"  href="https://github.com/Ruffmantom" target="_blank" >
                <img className="icons" src={github} alt="github icon"></img>
            </a>
            
            <a className="iconsLink"  href="https://linkedin.com/in/tom-ruff-098330a3" target="_blank">
                <img className="icons" src={linkedIn} alt="linked in icon"></img>
            </a> 
            
        </div> 

    </div>
    );
}
export default Footer;