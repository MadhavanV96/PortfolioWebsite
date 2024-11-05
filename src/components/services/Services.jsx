import React from 'react';
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX design",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 3,
    image: Image3,
    title: "Photography",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
];



const Services = () => {
  return ( <>
  <section className="services container section" id="services" >
  <h2 className="section__title">
    Services
    </h2>
    <div className="services__container">
      {/* Front End */}
      <div className="services__card">
        <img src="src\assets\FrontendLogo.png" alt="" className="services__img" />
        <h3 className="services__title">Front End Development</h3>
        <div className='services_subtechniques'>
          <img src="src\assets\HTML5_logo_and_wordmark.svg" alt="" className='services__technology' />
          <img src="src\assets\CSS3_logo_and_wordmark.svg" alt="" className='services__technology' />
          <img src="src\assets\Tailwind_CSS_Logo.svg" alt="" className='services__technology' />
          <img src="src\assets\Unofficial_JavaScript_logo_2.svg" alt="" className='services__technology' />
          <img src="src\assets\React-icon.svg" alt="" className='services__technology' />
        </div>
      </div>
      {/* Back End */}
      <div className="services__card">
      <img src="src\assets\BackendLogo.png" alt="" className="services__img" />
        <h3 className="services__title">Back End Development</h3>
        <div className='services_subtechniques'>
          <img src="src\assets\Node.js_logo.svg" alt="" className='services__technology' />
          <img src="src\assets\icons8-express-js-50.png" alt="" className='services__technology' />
          <img src="src\assets\MongoDB_Logo.svg" alt="" className='services__technology' />
          <img src="src\assets\Python-logo-notext.svg" alt="" className='services__technology' />
          <img src="src\assets\MySql.png" alt="" className='services__technology' />
        </div>
      </div>
      {/* DesignTools */}
      <div className="services__card">
      <img src="src\assets\3-2-graphic-design-free-download-png.png" alt="" className="services__img" />
        <h3 className="services__title">Design Tools</h3>
        <div className='services_subtechniques'>
          <img src="src\assets\Figma-logo.svg" alt="" className='services__technology' />
          <img src="src\assets\Adobe_Photoshop_CC_icon.svg" alt="" className='services__technology' />
          <img src="src\assets\Adobe_Illustrator_CC_icon.svg" alt="" className='services__technology' />
        </div>
      </div>
      <>
      </>
      {/* Coding Support */}
      <div className="services__card ">
      <img src="src\assets\CodingSupport.png" alt="" className="services__img" />
        <h3 className="services__title">Coding Support</h3>
        <div className='services_subtechniques'>
          <img src="src\assets\Visual_Studio_Code_1.35_icon.svg" alt="" className='services__technology' />
          <img src="src\assets\github Black.svg" alt="" className='services__technology' />
          <img src="src\assets\Eclipse-Luna-Logo.svg" alt="" className='services__technology' />
        </div>
      </div>
      {/* Other Tools */}
      <div className="services__card ">
      <img src="src\assets\OtherTools.png" alt="" className="services__img" />
        <h3 className="services__title">Other Tools</h3>
        <div className='services_subtechniques'>
          <img src="src\assets\Microsoft_Office_Logo_(2019-present).svg" alt="" className='services__technology' />
          <img src="src\assets\1682566315logo-filmora.png" alt="" className='services__technology' />
        </div>

      </div>
  
    </div>

  </section>




  </>







  );
}

export default Services