import React from 'react';
import './ContactInfo.css';

function ContactInfo() {
  const defaultMessage = 'Hello, I would like to inquire about...';
  const phoneNumber = '919607313093';  // Replace with the recipient's phone number
  const message = 'Hello, this is Vivek ! How i can help you ?';
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const mailtoLink = `mailto:serviprouser@gmail.com?subject=Contact Form Submission&body=${defaultMessage}`;

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
        <a href={url}><img className='LogoSize' src="whats.png" alt="whatsapp" /></a>
        <img  className='LogoSize' src="twit.png" alt="Twitter" /> 
        {/* <a href="#" target="_blank"><img src="linkedin-logo.png" alt="LinkedIn" /></a> */}
        <img className='LogoSize' src="inst.png" alt="Instagram" /> 
        <a href={mailtoLink}><img className='EmailLogoSize' src="emails.png" alt="email" /></a>
      </div> 
    </div>
  ); 
}

export default ContactInfo;
