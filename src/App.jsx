// src/App.jsx
import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/project';
import Education from './components/education';
import Contact from './components/contact';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;