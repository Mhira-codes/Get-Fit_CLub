
import "./Join.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Join = () => {



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0pkqsik', 'template_udpf8rf', form.current, '_22kn8Gp-aHQ0rIDU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="join">
      <div className="left-join">
        <hr />
        <div>
          <span className="outline-text">READY TO </span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="outline-text">WITH US?</span>
        </div>
        </div>
        <div className="right-join">
          <form ref={form} onSubmit={sendEmail} className="email-container">
            <input
              type="email"
              name="user_name"
              placeholder="Enter your email address"
            />
            <button className="btn join-btn">Join now</button>
          </form>
        </div>
    
    </div>
  );
};

export default Join;
