import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
import Main from "./components/Main";

import { Routes, Route } from "react-router-dom";
// import BasicTrail from "./components/animations/BasicTrail";
function App() {
  return (
    <div className="snap-x snap-mandatory">
      {/* <BasicTrail /> */}
      <NavBar />
      {/* <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Blogs />
      <Footer /> */}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
