import './App.css';
import React from 'react';
import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from './components/Projects';
import Contact from "./components/Contact"

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
