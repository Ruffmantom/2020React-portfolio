import React from "react";

function Footer() {
    return (
        <div className="footer row">
        <div className="col-md-12 foot-icons">
            <img className="icons" src="./assets/images/logo-big.png" alt="Ruff web development logo"></img>
            
            <a className="icons"  href="https://github.com/Ruffmantom" >
                <img src="./assets/images/github.png" alt="github icon"></img>
            </a>
            
            <a className="icons"  href="https://linkedin.com/in/tom-ruff-098330a3">
                <img src="./assets/images/linkedin-icon.png" alt="linked in icon"></img>
            </a> 
            
        </div> 

    </div>
    );
}
export default Footer;