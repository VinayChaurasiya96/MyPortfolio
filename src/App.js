import "./App.scss";
import {Routes, Route, useLocation} from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/about";
import Contact from "./containers/contact";
import Portfolio from "./containers/portfolio";
import Skills from "./containers/skiills";
import Resume from "./containers/resume";
import NotFound from "./containers/pageNotFound";

import Navbar from "./components/navbar";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import particlesOptions from "./utils.js/particles";
function App() {
  // function for load particles
  const handleParticlesInit = async (main) => {
    await loadFull(main);
  };
  const pageLocation = useLocation();

  return (
    <div className="App">
      {/* Particles js only display at home page*/}
      {pageLocation.pathname === "/" && (
        <Particles
          id="tsparticles"
          init={handleParticlesInit}
          options={particlesOptions}
        />
      )}

      {/* Navbar */}
      <Navbar />
      <div className="App__main-page-content">
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
