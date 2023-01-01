import React from 'react';
import '../App.css'
import Footer from './Footer';
import emailjs from 'emailjs-com';

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_y2ovyet', 'template_hjvckve', e.target, 'QmGrWSmhh7aNryUL3')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div className="Contact">
      <header className="Contact-header">
        
        <form onSubmit={sendEmail}>
          <input className="EmailInput" type="text" id="email" name="email" placeholder="your@email.com"></input>
          <input className="EmailInput" type="text" id="subject" name="subject" placeholder="Subject"></input>
          <textarea className="EmailMessage" type="text" id="message" name="message" placeholder="Message"></textarea>
          <button class="button-59 SendMessage" download>Send Message</button>
        </form>

      </header>

      <Footer />

    </div>
  );
};

export default Contact;
