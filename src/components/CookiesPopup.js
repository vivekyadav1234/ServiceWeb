import React, { useState, useEffect } from 'react';
import './CookiesPopup.css'
const CookiesPopup = () => {
  const [acceptedCookies, setAcceptedCookies] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted === 'true') {
      setAcceptedCookies(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setAcceptedCookies(true);
  };
  const rejectCookie= () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setAcceptedCookies(true);
  };

  return (
    !acceptedCookies && (
      <div className="cookies-popup">
        <span className='closeCoo' onClick={rejectCookie}> &times;</span>
        <div className="cookies-content">
          <h4>This website uses cookies.</h4>
          <p>
            We use cookies to analyze website traffic and optimize your website experience.
            By accepting our use of cookies, your data will be aggregated with all other user data.
          </p>
        </div>
        <button className="accept-cookies-button" onClick={acceptCookies}>
          Accept Cookies
        </button>
      </div>
    )
  );
};

export default CookiesPopup;
