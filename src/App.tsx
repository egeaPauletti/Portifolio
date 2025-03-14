import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/home/homeIndex";
import About from "./pages/about/aboutIndex";
import HardSkills from "./pages/hardSkills/hardSkillsIndex";
import SoftSkills from "./pages/softSkills/softSkillsIndex";
import Projects from "./pages/projects/projectIndex";
import Contact from "./pages/contact/contactIndex";
import Navbar from "./components/navBar";
import SideBar from "./components/sideBar";

function App() {
  const location = useLocation();
  return (
    <>
      <SideBar />
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hardskills" element={<HardSkills />} />
        <Route path="/softskills" element={<SoftSkills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
