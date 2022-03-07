import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"
import "./Navbar.css"

const Navbar = () => {

    return <>
        <div className="navbarContainer">
            <h1 className="navbarName"> Felix Cadiz </h1>
            <AnchorLink href="#aboutAnchor">About</AnchorLink>
            <AnchorLink href="#projectsAnchor">Projects</AnchorLink>
            <AnchorLink href="#contactAnchor">Contact</AnchorLink>
        </div>
    </>
}

export default Navbar;