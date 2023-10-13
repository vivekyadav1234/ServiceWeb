// NotFound.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/ServiceWeb'); // Redirect to the origin URL
  }, [navigate]);

  return null; // This component doesn't render anything
};

export default NotFound;
