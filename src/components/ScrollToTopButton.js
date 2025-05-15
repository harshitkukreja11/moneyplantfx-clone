import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return visible ? (
    <Button
      className="scroll-to-top-btn position-fixed shadow text-white"
      style={{
        zIndex: 1030,
        bottom: '30px',
        width: '50px',
        height: '55px',
        right: '30px',
        borderRadius: '30%',
        backgroundColor: '#f6732e',
        border: 'none',
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
      </svg>
    </Button>
  ) : null;
};

export default ScrollToTopButton;
