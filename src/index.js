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