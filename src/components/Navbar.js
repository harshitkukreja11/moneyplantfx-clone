// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for better navigation within React
import { Navbar as BootstrapNavbar, Container, Nav, Button } from 'react-bootstrap';
import './Navbar.css'; // Import custom CSS file for navbar styles

const Navbar = () => {
  return (
    <div>
      <BootstrapNavbar bg="primary" className="shadow sticky-top z-50 custom-navbar" expand="lg">
        <Container>
          <BootstrapNavbar.Brand as={Link} to="/" className="custom-navbar-brand">
            <img
              src="https://moneyplantfx.com/wp-content/uploads/2024/08/logo-mpfx.png"
              alt="MoneyPlantFX Logo"
              className="navbar-logo"
            />
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="custom-nav-link">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="custom-nav-link">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/accounts" className="custom-nav-link">
                Accounts
              </Nav.Link>
              <Nav.Link as={Link} to="/markets" className="custom-nav-link">
                Markets
              </Nav.Link>
              <Nav.Link as={Link} to="/platforms" className="custom-nav-link">
                Platforms
              </Nav.Link>
              <Nav.Link as={Link} to="/news" className="custom-nav-link">
                News
              </Nav.Link>
              <Nav.Link as={Link} to="/blog" className="custom-nav-link">
                Blog
              </Nav.Link>
            </Nav>
            {/* Orange Buttons */}
            <div className="d-flex gap-3">
              <Button variant="warning" className="navbar-button">
                Account
              </Button>
              <Button variant="warning" className="navbar-button">
                Web Terminal
              </Button>
            </div>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>

      {/* Running Text Section */}
      <div className="running-text bg-warning text-white py-2">
        <Container>
          <marquee behavior="scroll" direction="left" className="fw-semibold">
            Welcome to Moneyplant FX, an international online Forex and CFD trading firm offering 24-hour access to a diverse range of trading products including foreign exchange, stocks, commodities, futures, and indices.
          </marquee>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
