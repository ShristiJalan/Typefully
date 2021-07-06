import React from 'react';
import './Landing.css';
import hero from "./../../assets/hero.png";

const Landing = () => {
    return (
        <div className="landing-container">
            <div className="landing-left">
                <h1 className="landing-header">Can you type...</h1>
                <div className="typewriter-container">
                    <p>Fast?</p>
                    <p>Correct?</p>
                    <p>Quick</p>
                </div>
            </div>
            <div className="landing-right">
                <img className="hero-image" src={hero} alt="hero" />
            </div>
        </div>
    );
}

export default Landing;