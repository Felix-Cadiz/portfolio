import React from "react";
import "./About.css"

const About = () => {

    return <>
        <div id="aboutAnchor" className="aboutContainer container">
            <h1> ABOUT ME </h1>
            <div className="twoStories">
                <div className="music">
                    <h3> Music Education </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium eros ligula, sed vulputate nulla ullamcorper sed. Aenean elementum sit amet felis at finibus. Vestibulum tincidunt urna non orci lacinia sollicitudin nec gravida risus. Sed nunc risus, mattis vitae elit non, vulputate sollicitudin elit. Maecenas vitae varius arcu. Nullam non turpis sodales, efficitur sem ac, gravida tortor. Sed tincidunt.</p>
                </div>
                <div className="tech">
                    <h3> Transition into Tech </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium eros ligula, sed vulputate nulla ullamcorper sed. Aenean elementum sit amet felis at finibus. Vestibulum tincidunt urna non orci lacinia sollicitudin nec gravida risus. Sed nunc risus, mattis vitae elit non, vulputate sollicitudin elit. Maecenas vitae varius arcu. Nullam non turpis sodales, efficitur sem ac, gravida tortor. Sed tincidunt.</p>
                </div>
            </div>
        </div>
    </>
}

export default About;