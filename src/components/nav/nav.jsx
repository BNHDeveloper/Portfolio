import "../../roles/GlobalRoles.css";
import "./nav.css";
import "./animNav.js";
import logo from '../../static/logo template.svg';
import React, { useState } from "react"; 
const Navbar = () => {
    const [navShow, setNavShow] = useState(false);
    return (
    <nav className="navbar fixed-top">
        <div className="container">
            <a className="brand" href="/">
                <img src={logo} alt="easy code dz" />
            </a>
            <button className={navShow?"show":""} id="icon-open" type="button" onClick={()=>setNavShow(!navShow)}>
                <span className="navbar-toggler-icon br-r4"></span>
            </button>
            <div className={navShow?"nav-link show":"nav-link"} id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="link" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="link" href="#service">Service</a>
                    </li>                   
                    <li className="nav-item">
                        <a className="link" href="#contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="btn btn-main" href="#email">subsecribe</a>
                    </li>
                </ul>
            </div>
        </div>            
    </nav>
    )
}

export default Navbar