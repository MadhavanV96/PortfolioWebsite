import React from 'react';
import "./home.css";
import Me from "../../assets/Madd.png";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import cv from '../../assets/Madhavan Resume.pdf'


const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className='ProfilePic' />
        <h1 className="home__name">
          Madhavan V
        </h1>
        <span className="home__education">
          I'm Full Stack MERN Developer
        </span>
        <HeaderSocials />
        <a href={cv}  target='blank' className="btn">Download CV</a>
        <a href="#contact" className="btn">Let's Talk</a>
        
        <ScrollDown />
      </div>
      <Shapes />
    </section>
  )
}

export default Home