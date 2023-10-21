import React from 'react';
import './ContactInfo.css';

function ContactInfo() {
  return (
    <div className="contact-info">
         
            <h2>Better yet, see us in person!</h2>
            <p>
             We love our customers, so feel free to visit during normal business hours.
            </p>
            <p>
                <strong>ServiPro</strong>
                <br />
                BTM Layout, Bengaluru, Karnataka, India
            </p>
        
       <p>Feel free to reach out to us via email, phone, or social media. We're here to help!</p>
      <div className="social-links">
        <a href="https://wa.me/91960731393" target="_blank"><img className='LogoSize' src="whats.png" alt="whatsapp" /></a>
        <a><img  className='LogoSize' src="twit.png" alt="Twitter" /></a>
        {/* <a href="#" target="_blank"><img src="linkedin-logo.png" alt="LinkedIn" /></a> */}
        <a><img className='LogoSize' src="inst.png" alt="Instagram" /></a>
      </div> 
    </div>
  ); 
}

export default ContactInfo;
