// NotFound.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/ServiceWeb'); // Redirect to the origin URL
    }, 2000); // Redirect after a 2-second delay
  }, [navigate]);

  return (
    <div>
      <p>Page not found. Redirecting...</p>
    </div>
  );
};

export default NotFound;
