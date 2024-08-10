import React from 'react';
import { AboutMe } from './components/about/aboutMe';
import Main from './components/main/main';
import './App.scss';
import { Experience } from './components/experience/experience';
import { NavBar } from './components/navbar'

const App = () => {
  return (
    <div className="main">
      <NavBar />
      <div>
        <Main />
        <AboutMe />
        <Experience />
      </div>
    </div>
  );
}

export default App;
