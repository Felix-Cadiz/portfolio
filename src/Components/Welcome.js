import React from "react";
import "./Welcome.css";
import "animate.css";

const Welcome = () => {

    return <>
        <div id="topAnchor" className="welcomeContainer">
            <img className="headshot animate__animated animate__fadeIn" src="images/Headshot.png" />
            <div className="generalInfo animate__animated animate__fadeIn animate__delay-0.5s">
                <h1>Felix Cadiz</h1>
                <h3> Pronouns: He/Him/His </h3>
                <h3>Full Stack Developer | Music Educator</h3>
                <h4 className="animate__animated animate__fadeIn animate__delay-1s">"It is what you do with the gift of life that determines who you are." - Mewtwo</h4>
                <div className="contactLinks animate__animated animate__fadeIn animate__delay-2s">
                    <a className="button" href="https://docs.google.com/document/d/1F1DCO8AeXyNYLzw357j-ZwoOSjYeC5B8w3NpLRWwmFo/edit?usp=sharing" target="/blank">Resume</a>
                    <a className="button" href="mailto:name@FelixRCadiz@gmail.com" target="/blank">Email</a>
                </div>
            </div>
        </div>
        
        <div className="wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
                <path fill="#00cba9" fillOpacity="0.6" d="M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,170.7C672,149,768,107,864,90.7C960,75,1056,85,1152,101.3C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
        </div>
    </>
}

export default Welcome;