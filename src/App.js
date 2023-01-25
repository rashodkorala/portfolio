import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer";
// import BasicTrail from "./components/animations/BasicTrail";
function App() {
  return (
    <div className="snap-x snap-mandatory">
      {/* <BasicTrail /> */}
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
