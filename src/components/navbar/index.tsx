import React from "react";
import './navbar.scss';

export const NavBar = () => {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <nav className="navbar navbar-div" role="navigation" aria-label="Main navigation">
        <ul>
          <li><a href="#about" aria-label="Navigate to About section">About</a></li>
          <li><a href="#skills" aria-label="Navigate to Skills section">Skills</a></li>
          <li><a href="#experience" aria-label="Navigate to Experience section">Experience</a></li>
          <li><a href="#projects" aria-label="Navigate to Projects section">Projects</a></li>
          <li><a href="#contact" aria-label="Navigate to Contact section">Contact</a></li>
        </ul>
      </nav>
    </>
  )
}