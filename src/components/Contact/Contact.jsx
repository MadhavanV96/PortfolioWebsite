import React from 'react';
import "./contact.css"

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about anything!</h3>
          <p className="contact__details">Don't like forms? Send me an E-mail. 👋</p>
        </div>

        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input"
              placeholder='Insert Your Name'/>
            </div>
            <div className="contact__form-div">
              <input type="email" className="contact__form-input"
              placeholder='Insert Your E-Mail'/>
            </div>
          </div>
          <div className="contact__form-div">
              <input type="text" className="contact__form-input"
              placeholder='Insert Your Subject'/>
            </div>
            <div className="contact__form-div contact__form-area">
             <textarea name="" id=""
             className='contact__form-input' placeholder='Write your Message'></textarea>
            </div>
            <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact