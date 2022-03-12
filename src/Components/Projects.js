import React from "react";
import "./Projects.css"

const About = () => {

    return <>
    <h1 id="projectsAnchor"> Recent Projects </h1>
        <div className="projectsContainer container">
            <div className="projectCard">
                <img className="pokedex" src="images/Pokedex.jpeg" alt="Pokedex"/>
                <div className="projectDescription">
                    <h3> Pokedex </h3>
                    <a className="projectLink" href="https://practical-ardinghelli-a24fb5.netlify.app/" target="_blank">Deploy</a>
                    <a className="projectLink" href="https://github.com/Felix-Cadiz/Pokemon_Generator" target="_blank">Repository</a>
                    <p> Learn about the world of Pokemon through this React app.</p>
                </div>
                
            </div>
            <div className="projectCard">
                <img className="porto3000" src="images/porto3000.png" alt="Porto 3000"/>
                <div className="projectDescription">
                    <h3> Porto 3000 </h3>
                    <a className="projectLink" href="http://porto3000.herokuapp.com/" target="_blank">Deploy</a>
                    <a className="projectLink" href="https://github.com/hoguer/porto3000" target="_blank">Repository</a>
                    <p> Short description on hover </p>
                </div>
            </div>
            <div className="projectCard">
                <img className="fitnessTracker" src="images/FitnessTracker.jpeg" alt="People lifting weights"/>
                <div className="projectDescription">
                    <h3> Fitness Tracker</h3>
                    <a className="projectLink" href="https://admiring-bhaskara-04c615.netlify.app/" target="_blank">Deploy</a>
                    <a className="projectLink" href="https://github.com/Felix-Cadiz/FitnessTrackr-FrontEnd" target="_blank">Repository</a>
                    <div className="projectText"> Short description on hover</div>
                </div>
            </div>
            <div className="portfolio projectCard">
                <img className="portfolio" src="images/Portfolio.png" alt="portofio" />
                <div className="projectDescription">
                    <h3> Personal Portfolio </h3>
                    <a className="projectLink" href="google.com" target="_blank">Deploy</a>
                    <a className="projectLink" href="google.com" target="_blank">Repository</a>
                    <div> Short description on hover </div>
                </div>
            </div>
        </div>
    </>
}

export default About;