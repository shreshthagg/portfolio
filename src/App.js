import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/home/home";
import Skills from "./components/About/skills";
import Projects from "./components/Projects/project"
import Work from "./components/WorkExperience/work"
import Footer from "./components/Footer/footer"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Work/>
      <Footer/>
    </div>
  );
}

export default App;
