import React from "react";
import "./Welcome.css";

const Welcome = () => {

    return <>
        <div className="welcomeContainer container">
            <h1>Felix Cadiz</h1>
            <h3>Full Stack Software Engineer</h3>
            <h5>"It is what you do with the gift of life that determines who you are." - Mewtwo</h5>
        </div>
        <div className="wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
                <path fill="#00cba9" fill-opacity="0.6" d="M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,170.7C672,149,768,107,864,90.7C960,75,1056,85,1152,101.3C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
        </div>
    </>
}

export default Welcome;