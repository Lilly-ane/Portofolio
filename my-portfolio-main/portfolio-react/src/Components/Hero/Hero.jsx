import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import CV from "../../assets/Liliana-Vaciu-CV.pdf";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <h1>
        <span>Hi! I’m Liliana</span>
      </h1>

      <p>
        A Junior Full Stack Developer passionate about building clean,
        responsive, and user-friendly websites. Welcome to my portfolio — here
        you’ll find some of my recent projects and skills. Always learning.
      </p>

      <div className="hero-action">
        <div className="hero-connect">
          <a
            className="anchor-link"
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
          >
            My CV
          </a>
        </div>

        <div className="hero-linkedin">
          <a
            href="https://www.linkedin.com/in/liliana-vaciu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            My LinkedIn
          </a>
        </div>

        <div className="hero-github">
          <a
            href="https://github.com/Lilly-ane"
            target="_blank"
            rel="noopener noreferrer"
          >
            My GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
