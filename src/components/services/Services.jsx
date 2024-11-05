import React from 'react';
import "./services.css";


import html from "../../assets/HTML5_logo_and_wordmark.svg";
import frontend from "../../assets/FrontendLogo.png";
import css from "../../assets/CSS3_logo_and_wordmark.svg";
import tailwind from "../../assets/Tailwind_CSS_Logo.svg";
import js from "../../assets/Unofficial_JavaScript_logo_2.svg";
import reactapp from "../../assets/React-icon.svg";
import Backend from "../../assets/BackendLogo.png";
import NodeJS from "../../assets/Node.js_logo.svg";
import ExpressJS from "../../assets/icons8-express-js-50.png";
import MongoDB from "../../assets/MongoDB_Logo.svg";
import Python from "../../assets/Python-logo-notext.svg";
import MySQL from "../../assets/MySql.png";
import Graphics from "../../assets/3-2-graphic-design-free-download-png.png";
import Figma from "../../assets/Figma-logo.svg";
import PShop from "../../assets/Adobe_Photoshop_CC_icon.svg";
import AIllus from "../../assets/Adobe_Illustrator_CC_icon.svg";
import CodeSupport from "../../assets/CodingSupport.png";
import VScode from "../../assets/Visual_Studio_Code_1.35_icon.svg";
import GitHub from "../../assets/github Black.svg";
import Eclipse from "../../assets/Eclipse-Luna-Logo.svg";
import OtherTools from "../../assets/OtherTools.png";
import MSOffice from "../../assets/Microsoft_Office_Logo_(2019-present).svg";
import Filmora from "../../assets/1682566315logo-filmora.png";


const Services = () => {
  return ( <>
  <section className="services container section" id="services" >
  <h2 className="section__title">
    Services
    </h2>
    <div className="services__container">
      {/* Front End */}
      <div className="services__card">
        <img src={frontend} alt="" className="services__img" />
        <h3 className="services__title">Front End Development</h3>
        <div className='services_subtechniques'>
          <img src={html} alt="" className='services__technology' />
          <img src={css} alt="" className='services__technology' />
          <img src={tailwind} alt="" className='services__technology' />
          <img src={js} alt="" className='services__technology' />
          <img src={reactapp} alt="" className='services__technology' />
        </div>
      </div>
      {/* Back End */}
      <div className="services__card">
      <img src={Backend} alt="" className="services__img" />
        <h3 className="services__title">Back End Development</h3>
        <div className='services_subtechniques'>
          <img src={NodeJS} alt="" className='services__technology' />
          <img src={ExpressJS} alt="" className='services__technology' />
          <img src={MongoDB} alt="" className='services__technology' />
          <img src={Python} alt="" className='services__technology' />
          <img src={MySQL} alt="" className='services__technology' />
        </div>
      </div>
      {/* DesignTools */}
      <div className="services__card">
      <img src={Graphics} alt="" className="services__img" />
        <h3 className="services__title">Design Tools</h3>
        <div className='services_subtechniques'>
          <img src={Figma} alt="" className='services__technology' />
          <img src={PShop} alt="" className='services__technology' />
          <img src={AIllus} alt="" className='services__technology' />
        </div>
      </div>
      <>
      </>
      {/* Coding Support */}
      <div className="services__card ">
      <img src={CodeSupport} alt="" className="services__img" />
        <h3 className="services__title">Coding Support</h3>
        <div className='services_subtechniques'>
          <img src={VScode} alt="" className='services__technology' />
          <img src={GitHub} alt="" className='services__technology' />
          <img src={Eclipse} alt="" className='services__technology' />
        </div>
      </div>
      {/* Other Tools */}
      <div className="services__card ">
      <img src={OtherTools} alt="" className="services__img" />
        <h3 className="services__title">Other Tools</h3>
        <div className='services_subtechniques'>
          <img src={MSOffice} alt="" className='services__technology' />
          <img src={Filmora} alt="" className='services__technology' />
        </div>

      </div>
  
    </div>

  </section>




  </>







  );
}

export default Services