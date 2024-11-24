import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"
require('dotenv').config();

const Contact = () => {
  const form = useRef();
  const [submit, setSubmit] = useState("Send Message");
  const[email,setEmail]=useState("sendEmail")
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.service_id, process.env.template_id, form.current, {
        publicKey: process.env.publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setEmail("");
          setSubmit("Message Sent");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

  };



  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about anything!</h3>
          <p className="contact__details">Don't like forms? Send me an E-mail. 👋</p>
        </div>

        <form ref={form} className="contact__form" onSubmit={sendEmail}>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" name='from_name' className="contact__form-input"
              placeholder='Insert Your Name'/>
            </div>
            <div className="contact__form-div">
              <input type="email" name='from_email' className="contact__form-input"
              placeholder='Insert Your E-Mail'/>
            </div>
          </div>
          <div className="contact__form-div">
              <input type="text" className="contact__form-input" name="subject"
              placeholder='Insert Your Subject'/>
            </div>
            <div className="contact__form-div contact__form-area">
             <textarea name="message" id=""
             className='contact__form-input' placeholder='Write your Message'></textarea>
            </div>
            <button className="btn" type='submit' value="Send">{submit}</button>
        </form>
      </div>
    </section>
  )
}

export default Contact