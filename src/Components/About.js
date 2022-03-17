import React from "react";
import "./About.css"

const About = () => {

    return <>
        <div id="aboutAnchor" className="aboutContainer container">
            <h1> ABOUT ME </h1>
            <div className="story">
                    <p> My name is Felix Cadiz and I am a software engineer with a 
                        background in public school education. </p>
                    <p> A new paragraph to discuss more coding stuff</p>
                    <p> New paragraph to talk about myself in other aspects </p>
            </div>
            <div className="techContainer">
                <img className="tech" src="images/technologies/HTML.png" alt="HTML 5"/>
                <img className="tech" src="images/technologies/CSS.png" alt="CSS"/> 
                <img className="tech" src="images/technologies/Javascript.png" alt="Javascript"/> 
                <img className="tech" src="images/technologies/React.png" alt="React"/> 
                <img className="tech" src="images/technologies/Node.png" alt="Node JS"/> 
                <img className="tech" src="images/technologies/PSQL.png" alt="PostgreSQl"/> 
                <img className="tech" src="images/technologies/Express.png" alt="Express JS"/> 
                <img className="tech" src="images/technologies/Git.png" alt="Git"/> 
            </div>
        </div>
    </>
}

export default About;