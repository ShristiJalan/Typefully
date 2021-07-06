import React from 'react';
import logo from './../../assets/logo.png';
import "./Nav.css";

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img className="flash-logo" src = {logo} alt="logo" />
                <p className = "flash-logo-text">Typefully</p>
            </div>
            <div className="nav-right">
                <a 
                target="_blank" className="nav-in-link" href="https://www.linkedin.com/in/shristijalan/in" rel="noreferrer">
                    CONTACT ME
                </a>
            </div>
        </div>
    )
}

export default Nav;