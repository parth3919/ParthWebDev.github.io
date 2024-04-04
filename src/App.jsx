import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/header";
import Projects from "./Components/Projects/Projects";
import MiniProjects from "./Components/MiniProjects/MiniProjects";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import ContactSection from "./Components/ContactSection/ContactSection";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <>
      <Header />
      <section id="Home">
        <Home />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="MiniProjects">
        <MiniProjects />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="AboutMe">
        <About />
      </section>
      <section id="ContactSection">
        <ContactSection />
      </section>
      <Footer />
    </>
  );
}

export default App;
