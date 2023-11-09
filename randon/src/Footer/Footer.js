import React from 'react';
import './footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className='footer-wrapper'>
        <p>Copyright {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
