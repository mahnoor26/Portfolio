import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import HeroBanner from "./components/HeroBanner";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Volunteer from "./components/Volunteer";
import Certifications from "./components/Certifications";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroBanner />
      <About />
      <Experience />
      <Projects />
      <Volunteer />
      <Certifications />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
