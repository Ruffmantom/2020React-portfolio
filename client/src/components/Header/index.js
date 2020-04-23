import React from 'react';
import { Link } from "react-router-dom";
import Burger from "../../assets/images/burger-w-min.png";
import Close from "../../assets/images/x-w-min.png";
import logo from "../../assets/images/main-w-logo-min.png";
import "./style.css";
import {Navbar, Nav} from "react-bootstrap";


function Header() {
    return (
        <Navbar bg="light" expand="lg">
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