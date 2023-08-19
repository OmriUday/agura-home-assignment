import React from 'react';

const Footer = () => {
  return (
    <p>
      {'Copyright © '}
      <a href="https://agorareal.com/">Agora</a> {new Date().getFullYear()}
      {'.'}
    </p>
  );
};

export default Footer;
