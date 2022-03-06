import React from "react";
import "./Projects.css"

const About = () => {

    return <>
        <div id="projectsAnchor" className="projectsContainer">
            Hello Projects
            <div className="pokedex projectCard"> 
                <h3> Pokedex </h3>
                <a className="projectLink" href="https://practical-ardinghelli-a24fb5.netlify.app/" target="_blank">Deploy</a>
                <a className="projectLink" href="https://github.com/Felix-Cadiz/Pokemon_Generator" target="_blank">Repository</a>
            </div>
            <div className="porto3000 projectCard"> 
                <h3> Porto 3000 </h3>
                <a className="projectLink" href="http://porto3000.herokuapp.com/" target="_blank">Deploy</a>
                <a className="projectLink" href="https://github.com/hoguer/porto3000" target="_blank">Repository</a>
            </div>
            <div className="fitnessTracker projectCard"> 
                <h3> Fitness Tracker</h3>
                <a className="projectLink" href="https://admiring-bhaskara-04c615.netlify.app/" target="_blank">Deploy</a>
                <a className="projectLink" href="https://github.com/Felix-Cadiz/FitnessTrackr-FrontEnd" target="_blank">Repository</a>
            </div>
            <div className="portfolio projectCard"> 
                <h3> Personal Portfolio </h3>
                <a className="projectLink" href="google.com" target="_blank">Deploy</a>
                <a className="projectLink" href="google.com" target="_blank">Repository</a>
            </div>
        </div>
    </>
}

export default About;