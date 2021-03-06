import React from "react";
import "./Projects.css"

const Projects = () => {

    return <>
    <h1 id="projectsAnchor"> Recent Projects </h1>
        <div className="projectsContainer container">
            <div className="pythonChallenge projectCard">
                <h3> 100 days of Python </h3>
                <p> March 2022 </p>
                <img className="portfolio" src="images/python.jpeg" alt="python" />
                <div className="projectDescription">
                    <a className="button" href="https://github.com/Felix-Cadiz/100_days_of_Python" target="_blank">Repository</a>
                    <div className="projectInformation">
                        <ul className="technologies"> Technologies:
                            <li> Python </li>
                            <li> VS Code </li>
                            <li> replit.com </li>
                        </ul>
                        <p className="projectAbout"> A collection of various projects showcasing my acquisition of a new language. <br/><br/> *Work in progress</p>
                    </div>
                </div>
            </div>
            <div className="portfolio projectCard">
                <h3> Personal Portfolio </h3>
                <p> Febuary 2022 - March 2022</p>
                <img className="portfolio" src="images/Portfolio.png" alt="portofio" />
                <div className="projectDescription">
                    <a className="button" href="felixcadiz.com" target="_blank">Deploy</a>
                    <a className="button" href="https://github.com/Felix-Cadiz/portfolio" target="_blank">Repository</a>
                    <div className="projectInformation">
                        <ul className="technologies"> Technologies:
                            <li> Javascript </li>
                            <li> React </li>
                            <li> CSS </li>
                        </ul>
                        <p className="projectAbout"> Responsive personal website.</p>
                    </div>
                </div>
            </div>
            <div className="projectCard">
                <h3> Pokedex </h3>
                <p> February 2022 </p> 
                <img className="pokedex" src="images/Pokedex.jpeg" alt="Pokedex"/>
                <div className="projectDescription">
                    <a className="button" href="https://practical-ardinghelli-a24fb5.netlify.app/" target="_blank">Deploy</a>
                    <a className="button" href="https://github.com/Felix-Cadiz/Pokemon_Generator" target="_blank">Repository</a>
                    <div className="projectInformation">
                        <ul className="technologies"> Technologies:                                
                            <li> Javascript </li>
                            <li> React </li>
                            <li> CSS </li>
                            <li> PokeAPI </li>
                        </ul>
                    <p className="projectAbout"> React application that showcases the world of Pokemon </p>
                    </div>
                </div>  
            </div>
            <div className="projectCard">
                <h3> Porto 3000 </h3>
                <p> January 2022 - Febuary 2022 </p>
                <img className="porto3000" src="images/porto3000.png" alt="Porto 3000"/>
                <div className="projectDescription">
                    <a className="button" href="https://youtu.be/KMA3AOkHswI" target="_blank">Video</a>
                    <a className="button" href="http://porto3000.herokuapp.com/" target="_blank">Deploy</a>
                    <a className="button" href="https://github.com/hoguer/porto3000" target="_blank">Repository</a>
                    <div className="projectInformation">
                        <ul className="technologies"> Technologies:
                            <li> Javascript </li>
                            <li> React </li>
                            <li> PostgreSQL </li>
                            <li> Express.js </li>
                            <li> CSS </li>
                        </ul>
                        <p className="projectAbout"> Ecommerce site that sells wine and cheese. </p>
                    </div>
                </div>
            </div>
            <div className="projectCard">
                <h3> Fitness Tracker</h3>
                <p> January 2022 </p>
                <img className="fitnessTracker" src="images/FitnessTracker.jpeg" alt="People lifting weights"/>
                <div className="projectDescription">
                    <a className="button" href="https://admiring-bhaskara-04c615.netlify.app/" target="_blank">Deploy</a>
                    <a className="button" href="https://github.com/Felix-Cadiz/FitnessTrackr-FrontEnd" target="_blank">Repository</a>
                    <div className="projectInformation">
                        <ul className="technologies"> Technologies:
                            <li> Javascript </li>
                            <li> React </li>
                            <li> PostgreSQL </li>
                            <li> Express.js </li>
                        </ul>
                        <p className="projectAbout"> Application that allows users to create, share, edit, 
                        and assemble their favorite fitness routines and activites.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Projects;