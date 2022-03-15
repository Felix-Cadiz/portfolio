import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"
import "./Navbar.css"

const Navbar = () => {

    return <>
        <div className="navbarContainer">
            <AnchorLink href="#topAnchor" className="navbarName"> Felix Cadiz </AnchorLink>
            <nav>
                <AnchorLink href="#aboutAnchor">About</AnchorLink>
                <AnchorLink href="#projectsAnchor">Projects</AnchorLink>
                <AnchorLink href="#contactAnchor">Contact</AnchorLink>
            </nav>
        </div>
    </>
}

export default Navbar;