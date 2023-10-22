import React from 'react';

function Gmap() {
  return (
    <div style={{ height: '300px', position: 'relative' }}>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d768.229403864004!2d77.60722499591851!3d12.915152626750043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14fc91a93031%3A0xf0afe62576cbdc3f!2sBTM%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1697937612546!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ position: 'absolute', bottom: 0, left: 0, border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
        ></iframe>
    </div>
  );
}

export default Gmap;
