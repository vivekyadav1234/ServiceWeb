import './ContactForm.css';
import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Formspree endpoint for your form
    const endpoint = 'https://formspree.io/f/xbjvbenw';

    // Use fetch to submit the form data to Formspree
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    // Check the response and handle accordingly
    if (response.ok) {
      setSubmissionStatus('success');
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => {
        setSubmissionStatus(null);
      }, 3000);
      // You can reset the form fields here if needed
    } else {
      setSubmissionStatus('error');
    }
  };
  return (
    <div className="contact-form">
      <h2>Drop us a line!</h2>
      <form action="#" method="post" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" name="email" placeholder="Your Email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
        <textarea name="message" placeholder="Your Message" required value={message}  onChange={(e) => setMessage(e.target.value)}></textarea>
        <button type="submit">Submit</button>
      </form>
      {submissionStatus === 'success' && (
        <div className="success-message">
          Form submitted successfully! Thank you.
        </div>
      )}

      {submissionStatus === 'error' && (
        <div className="error-message">
          Error submitting the form. Please try again.
        </div>
      )}
    </div>
  );
}

export default ContactForm;
