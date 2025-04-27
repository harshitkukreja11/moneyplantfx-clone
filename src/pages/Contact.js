// src/pages/Contact.js
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-light">
      {/* Hero Section with background image and overlay */}
      <div
        style={{
          position: 'relative',
          backgroundImage: 'url("https://sharemarketclasses.in/wp-content/uploads/2024/08/About-Banner.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '80px 0',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1,
          }}
        />
        <Container className="text-white position-relative z-2">
          <h2 className="text-center fw-bold mb-3">Contact Us</h2>
          <p className="text-center lead">
            Have questions? Reach out to us and our support team will get back to you shortly.
          </p>
        </Container>
      </div>

      {/* Contact Info and Form */}
      <h4 className="text-center text-secondary fw-semibold mb-4">Our Presence</h4>
      <Container className="py-5">
        <Row className="mb-5">
          {/* Moheli Office */}
          <Col md={6} className="mb-4">
            <h4 className="text-secondary fw-semibold mb-3">Moheli Address</h4>
            <p className="mb-3 d-flex align-items-center">
              <FaMapMarkerAlt className="text-primary me-2" size={18} />
              <strong>Registered Address:</strong>&nbsp;C/O Burney Tomar Ltd. 32 Nova Road, Croydon, United Kingdom, CRO 2TL
            </p>
            <p className="mb-3 d-flex align-items-center">
              <FaEnvelope className="text-primary me-2" size={18} />
              <strong>Email:</strong>&nbsp;
              <a href="mailto:support@moneyplantfx.com" className="text-decoration-none">
                support@moneyplantfx.com
              </a>
            </p>
          </Col>

          {/* UAE Office */}
          <Col md={6} className="mb-4">
            <h4 className="text-secondary fw-semibold mb-3">UAE Address</h4>
            <p className="mb-3 d-flex align-items-center">
              <FaMapMarkerAlt className="text-primary me-2" size={18} />
              <strong>Physical Address:</strong>&nbsp;Office-103, The Business Center, Al Hamriya Street, Dubai – UAE
            </p>
            <p className="mb-3 d-flex align-items-center">
              <FaPhoneAlt className="text-primary me-2" size={18} />
              <strong>Phone:</strong>&nbsp;
              <a href="tel:+97143489984" className="text-decoration-none">
                +971-43489984
              </a>
            </p>
            <p className="mb-3 d-flex align-items-center">
              <FaEnvelope className="text-primary me-2" size={18} />
              <strong>Email:</strong>&nbsp;
              <a href="mailto:support@moneyplantfx.com" className="text-decoration-none">
                support@moneyplantfx.com
              </a>
            </p>
          </Col>
        </Row>

        {/* Contact Form */}
        <Row className="justify-content-center">
          <Col md={8}>
            <h4 className="text-center text-secondary fw-semibold mb-4">Let's Get in Touch</h4>
            <Form>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" required />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="you@example.com" required />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your message..." required />
              </Form.Group>
              <div className="text-center">
                <Button variant="primary" type="submit" className="px-5">
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
