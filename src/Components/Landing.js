import About from "./About.js";
import Projects from "./Projects";
import Welcome from "./Welcome"

const Home = () => {
    return <>
        <div>
            <Welcome />
            <About />
            <Projects />
        </div>
    </>
}

export default Home;