// src/pages/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <div className="about-main">
      {/* Full-width About section with image and text */}
      <div className="about-highlighted-section">
        <div className="overlay">
          <h2 className="fw-bold mb-3">About Us</h2>
          <p className="lead">
            At <strong>MoneyPlantFX</strong>, we empower traders with the tools, insights, and support to
            thrive in global markets. With real-time data, cutting-edge platforms, and trusted security,
            we make trading simple and powerful.
          </p>
        </div>
      </div>

      {/* Key Features Section */}
      <Container>
        <h3 className="text-center key-features-title mb-4">Our Key Features</h3>
        <Row className="text-center">
          <Col xs={6} md={4} className="mb-4 key-feature">
            <img src="https://moneyplantfx.com/wp-content/uploads/2024/07/icon-6.png" alt="Secure" width="60" className="mb-2" />
            <p>Regulated & Secure</p>
          </Col>
          <Col xs={6} md={4} className="mb-4 key-feature">
            <img src="https://moneyplantfx.com/wp-content/uploads/2024/07/icon-4.png" alt="Support" width="60" className="mb-2" />
            <p>24/7 Customer Support</p>
          </Col>
          <Col xs={6} md={4} className="mb-4 key-feature">
            <img src="https://moneyplantfx.com/wp-content/uploads/2024/07/icon-2.png" alt="Analytics" width="60" className="mb-2" />
            <p>Real-Time Analytics</p>
          </Col>
          <Col xs={6} md={4} className="mb-4 key-feature">
            <img src="https://moneyplantfx.com/wp-content/uploads/2024/07/icon-5.png" alt="Secure" width="60" className="mb-2" />
            <p>Secure Transactions</p>
          </Col>
          <Col xs={6} md={4} className="mb-4 key-feature">
            <img src="https://moneyplantfx.com/wp-content/uploads/2024/07/icon-3.png" alt="Instruments" width="60" className="mb-2" />
            <p>Global Instruments</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
