import React from "react";
import "./Footer.css"

const Footer = () => {

    return <>
    <div className="footerContainer">
        <div className="header"> Connect with me </div>
        <div>
            <footer className="footer">
                <a href="https://github.com/Felix-Cadiz" target="/blank">
                    <img className="externalLink gitHub" src="images/Github.png" alt="Github Link" />
                </a>
                <a href="https://www.linkedin.com/in/felix-cadiz/" target="/blank">
                    <img className="externalLink linkedIn" src="images/LinkedIn.png" alt="LinkedIn Link" />
                </a>
            </footer>
        </div>
    </div> 
    </>
}

export default Footer;