import React from "react";
import "./About.css"

const About = () => {

    return <>
        <div id="aboutAnchor" className="aboutContainer container">
            <h1> ABOUT ME </h1>
            <div className="story">
                    <p> Hi, I'm Felix, a full stack web developer with a background in teaching music 
                        in a public school setting. A graduate of FullStack Academy, I mostly program 
                        in Javascript; using backend frameworks like <b>Node.js</b> and <b>Express</b>, 
                        and frontend frameworks like <b>React</b>. 
                     </p>
                    <p> I enjoy working with the client side, creating accessible, inviting, and memorable 
                        experiences to all users. Manipulating <b>CSS</b>, creating custom animations, and 
                        pulling data from APIs. As a former teacher in the performing arts, I understand 
                        that it is not only about the content, but the manner in which it is presented. 
                    </p>
                    <p> Despite only starting to code in Mid-2021, building digital projects has become 
                        a great hobby of mine. Aside from coding, I enjoy creating music with a variety 
                        of instruments, yoyoing, experiencing musical theatre, and catching Pokemon in the 
                        newest region. 
                    </p>
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