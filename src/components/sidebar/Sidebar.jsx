import React from 'react';
import "./sidebar.css";
import Logo from "../../assets/MLogo.png"
function Sidebar() {
  return (
    <aside className='aside'>
      <a href="#home" className="nav__logo">
        <img src={Logo} alt="" className='nav__log__M' style={{height:"75px"}} />
      </a>

      <nav className="nav">
        <div className="nav__menu">
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href="#home" className="nav__link">
                <i className="icon-home"></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href="#about" className="nav__link">
                <i className="icon-user-following"></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href="#services" className="nav__link">
                <i className="icon-briefcase"></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href="#resume" className="nav__link">
                <i className="icon-graduation"></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href="#portfolio" className="nav__link">
                <i className="icon-layers"></i>
              </a>
            </li>

           

            <li className='nav__item'>
              <a href="#contact" className="nav__link">
                <i className="icon-bubble"></i>
              </a>
            </li>



          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">
          &copy; 2024


        </span>

      </div>




    </aside>
  )
}

export default Sidebar