import './ContactForm.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [messages, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null);
  // const [ipInfoData, setipInfo] = useState('');
  const [ipInfo, setIpInfo] = useState(null);
  const [error, setError] = useState(null);

  const [message, setMessageToSend] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_API_KEY' with your actual API key
        const apiKey = '75d4b9a50737ba';
        const response = await axios.get('https://ipinfo.io/json?token=75d4b9a50737ba', {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        });

        // Check for status code 429 (Too Many Requests)
        if (response.status === 429) {
          // Handle rate-limiting or show a message to the user
          setError('Too Many Requests. Please try again later.');
        } else {
          const ipInfoData = response.data;
          const newKey = 'message';
          const newDataObject = {...ipInfoData,[newKey]: '' };
          setIpInfo(newDataObject);
          // Do something with the IP information (e.g., send it to your server)
        }
      } catch (error) {
        console.error('Error fetching IP information:', error);
        setError('An error occurred while fetching IP information.');
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
   // const newKey = 'message';
    //const newDataObject = {...ipInfo,[newKey]: messages };
   // setMessageToSend(newDataObject)
   ipInfo.message=messages
    console.log(message,ipInfo,messages);
    // Formspree endpoint for your form
   const endpoint = 'https://formspree.io/f/xbjvbenw';

    // Use fetch to submit the form data to Formspree
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, ipInfo }),
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
      setTimeout(() => {
        setSubmissionStatus(null);
      }, 3000);
    }
  };
  return (
    <div className="contact-form">
      <h2>Drop us a line!</h2>
      <form action="#" method="post" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" name="email" placeholder="Your Email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
        <textarea name="message" placeholder="Your Message" required value={messages}  onChange={(e) => setMessage(e.target.value)}></textarea>
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
