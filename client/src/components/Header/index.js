import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Burger from "../../assets/images/burger-w-min.png";
import Close from "../../assets/images/x-w-min.png";
import logo from "../../assets/images/main-w-logo-min.png";
import "./style.css";
import { Navbar, Nav } from "react-bootstrap";




function Header() {
    

    useEffect(() => {
        let navEl = document.getElementById('scrollNav');

    function scrollFunction() {
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            navEl.style.backgroundColor = "rgba(100, 100, 100)";
            navEl.style.transitionProperty = "background-color";
            navEl.style.transitionDuration = "250ms";
            navEl.style.transitionTimingFunction = "ease";
    
        } else {
            navEl.style.backgroundColor = "rgba(100, 100, 100, 0)";
            
    
        }
    }
         
        window.onscroll = () => {scrollFunction()};
    });

    return (
        <Navbar expand="lg" id="scrollNav" >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Projects">Projects</Nav.Link>
                    <Nav.Link href="/Contact">Connect</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Brand href="/"><img className="nav-logo" src={logo} alt="Website Logo"></img></Navbar.Brand>
        </Navbar>

    );
}

export default Header;