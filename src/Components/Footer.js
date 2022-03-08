import React from "react";
import "./Footer.css"

const Footer = () => {

    return <>
    <div id="contactAnchor" className="footerContainer">
        <div className="footerText"> Connect with me </div>
            <footer className="footerLinks">
                <a href="https://github.com/Felix-Cadiz" target="/blank">
                    <img className="externalLink gitHub" src="images/Github.png" alt="Github Link" />
                </a>
                <a href="https://www.linkedin.com/in/felix-cadiz/" target="/blank">
                    <img className="externalLink linkedIn" src="images/LinkedIn.png" alt="LinkedIn Link" />
                </a>
                <a href="mailto:name@FelixRCadiz@gmail.com" target="/blank">
                    <img className="externalLink email" src="images/Email.png" alt="Email FelixRCadiz@gmail.com" />
                </a>
                <a href="https://docs.google.com/document/d/1F1DCO8AeXyNYLzw357j-ZwoOSjYeC5B8w3NpLRWwmFo/edit?usp=sharing" target="/blank">
                    <img className="externalLink resume" src="images/Resume.png" alt="Felix Cadiz's Resume" />
                </a>
            </footer>
        <div className="footerText"> Felix Cadiz © 2022 </div>
    </div> 
    </>
}

export default Footer;