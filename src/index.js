import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route, NavLink, BrowserRouter as Router } from "react-router-dom";

import {
    Home,
    About,
    Projects,
    Contact
} from "./Components/"

const App = () => {
    
    return <>
    <h1> Felix Cadiz </h1>
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </nav>

    <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
    </Routes>

    <footer>
        <a href="https://github.com/Felix-Cadiz" target="/blank">
            <img src="images/Github.png" alt="Github Link" />
        </a>
        <a href="https://www.linkedin.com/in/felix-cadiz/" target="/blank">
            <img src="images/LinkedIn.png" alt="LinkedIn Link" />
        </a>
    </footer>
    </>
}

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("app")
)