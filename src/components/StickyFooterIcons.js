// src/components/StickyFooterIcons.js
import React from 'react';
import { FaWhatsapp, FaTelegramPlane, FaUserCircle } from 'react-icons/fa';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const StickyFooterIcons = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        zIndex: 1050,
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
        backgroundColor: '#ffffffcc',
        padding: '10px 15px',
        borderRadius: '30px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      }}
    >
      {/* WhatsApp */}
      <OverlayTrigger placement="top" overlay={<Tooltip>Chat on WhatsApp</Tooltip>}>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="d-flex flex-column align-items-center text-white bg-success rounded-circle shadow"
          style={{ width: '50px', height: '50px', justifyContent: 'center', textDecoration: 'none' }}
        >
          <FaWhatsapp size={22} />
          <small style={{ fontSize: '10px' }}>WhatsApp</small>
        </a>
      </OverlayTrigger>

      {/* Telegram */}
      <OverlayTrigger placement="top" overlay={<Tooltip>Join on Telegram</Tooltip>}>
        <a
          href="https://t.me/YourTelegramUsername"
          target="_blank"
          rel="noopener noreferrer"
          className="d-flex flex-column align-items-center text-white bg-primary rounded-circle shadow"
          style={{ width: '50px', height: '50px', justifyContent: 'center', textDecoration: 'none' }}
        >
          <FaTelegramPlane size={22} />
          <small style={{ fontSize: '10px' }}>Telegram</small>
        </a>
      </OverlayTrigger>

      {/* Login */}
      <OverlayTrigger placement="top" overlay={<Tooltip>Login to Account</Tooltip>}>
        <a
          href="/login"
          className="d-flex flex-column align-items-center text-dark bg-warning rounded-circle shadow"
          style={{ width: '50px', height: '50px', justifyContent: 'center', textDecoration: 'none' }}
        >
          <FaUserCircle size={22} />
          <small style={{ fontSize: '10px' }}>Login</small>
        </a>
      </OverlayTrigger>
    </div>
  );
};

export default StickyFooterIcons;
