import React from 'react'
import './Hero.css'
import MyPic from '../../assets/MyPic.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      {/* <img src={MyPic} alt="" /> */}
      <h1><span >Hi! I’m Liliana</span>  </h1>
      <p>
        A Junior Full Stack Developer passionate about building clean, responsive, and user-friendly websites.
         Welcome to my portfolio — here you’ll find some of my recent projects and skills.
         Always learning.
</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-linkedin"><a href="https://www.linkedin.com/in/liliana-vaciu/" target="_blank"
        rel="noopener noreferrer">My LinkedIn</a></div>
         <div className="hero-github"><a href="https://github.com/Lilly-ane" target="_blank"
        rel="noopener noreferrer">My GitHub</a></div>
      </div>
    </div>
  )
}

export default Hero
