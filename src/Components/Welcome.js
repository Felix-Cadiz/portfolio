import React from "react";
import "./Welcome.css";
import "animate.css";

const Welcome = () => {

    return <>
        <div id="topAnchor" className="welcomeContainer">
            <img className="headshot animate__animated animate__fadeIn" src="images/Headshot.jpeg" />
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
    </>
}

export default Welcome;