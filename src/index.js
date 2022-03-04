import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css"

import {
    Navbar,
    Landing,
    Footer
} from "./Components/"

const App = () => {
    
    return <>
    <h1> Felix Cadiz </h1>
    <nav>
        <Router>
            <Navbar />
            <Landing />
            <Footer />
        </Router>
    </nav>
    </>
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
)