import { Routes, Route, useLocation } from "react-router-dom";

import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import "../index.css";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="">
        <div className="flex h-screen w-screen absolute top-20 left-20">
          <SideBar />
          <div className="flex flex-col h-screen w-screen items-center relative top-10 -left-20 gap-[20%]">
            <div className="relative -right-[15%] animationSlideFromRight">
              {location.pathname !== "/" && <NavBar />}
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<></>} />
              <Route path="/hardskills" element={<></>} />
              <Route path="/softskills" element={<></>} />
              <Route path="/projects" element={<></>} />
              <Route path="/contact" element={<></>} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
