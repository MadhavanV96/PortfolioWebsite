import React from 'react';
import "./about.css";
import Image from "../../assets/Madd.png";
import AboutBox from './AboutBox';


const About = () => {
    return (
        <section className="about container section" id='about'>
            <h2 className="section__title">
                About Me
            </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='About_ProfilePic' />
                <div className="about__data grid">
                    <div className="about__info">
                        <div className="about__description">
                        I am a dedicated MERN Stack Developer with a B.E. in Computer Science and Engineering, bringing over four years of experience as a system engineer. My past work has equipped me with a diverse skill set, from managing and editing multimedia content like photographs and videos to designing posters and brochures. I have also maintained school IT infrastructure, including ERP systems, GPS tracking for vehicles, and CCTV networks. My passion for technology and creativity drives me to build efficient, scalable web applications.<br/>                            <a href="" className="btn">Download CV</a>
                        </div>

                    </div>
                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills_name">Development</h3>
                                <span className="skills__number ">90%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage developement">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills_name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills_name">Multimedia Skills</h3>
                                <span className="skills__number">80%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage Multimedia">

                                </span>
                            </div>
                        </div>

                    </div>
                </div>




            </div>

            {/* <AboutBox /> */}
        </section>
    );
};

export default About;