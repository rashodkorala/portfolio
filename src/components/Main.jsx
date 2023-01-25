import React from "react";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer";
import Skills from "./Skills";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
