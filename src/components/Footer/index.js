import React from "react";
import { Link } from "react-router-dom";
import github from "../../assets/images/github-min.png";
import linkedIn from "../../assets/images/linkedin-icon-min.png";
import logo from "../../assets/images/logo-big-min.png";


function Footer() {
    return (
    <div className="footer row">
        <div className="foot-icons">
            <Link className="iconsLink" to="/">
                <img className="icons" src={logo} alt="Ruff web development logo"></img>
            </Link>
        
            <Link className="iconsLink"  to="https://github.com/Ruffmantom" >
                <img className="icons" src={github} alt="github icon"></img>
            </Link>
            
            <Link className="iconsLink"  to="https://linkedin.com/in/tom-ruff-098330a3">
                <img className="icons" src={linkedIn} alt="linked in icon"></img>
            </Link> 
            
        </div> 

    </div>
    );
}
export default Footer;