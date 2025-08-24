import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Connect from './components/Connect';
import './App.css';

const App = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} />
      <main>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="connect">
          <Connect />
        </section>
      </main>
    </div>
  );
};

export default App;
