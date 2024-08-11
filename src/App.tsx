import React from 'react';
import { AboutMe } from './components/about/aboutMe';
import Main from './components/main/main';
import './App.scss';
import { Experience } from './components/experience/experience';
import { NavBar } from './components/navbar'
import { Skills } from './components/skills';
import { SpeedDialComp } from './components/speedDial';
import { Contact } from './components/contact';


const App = () => {
 
  return (
    <div className="main">
      <NavBar />
      <div>
        <Main />
        <AboutMe />
        <Skills />
        <Experience />
        <Contact />
      </div>
      <SpeedDialComp />
    </div>
  );
}

export default App;
