// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar as BootstrapNavbar,
  Container,
  Nav,
  NavDropdown,
  Button,
} from 'react-bootstrap';
import './Navbar.css'; // Ensure this CSS file contains styles to match the target site

const Navbar = () => {
  return (
    <div>
      {/* Main Navbar */}
      <BootstrapNavbar
        // Changed bg to 'white' to match the target site
        bg="white"
        expand="lg"
        // Kept shadow, sticky-top, z-index and custom class
        className="shadow sticky-top z-50 custom-navbar"
      >
        <Container>
          <BootstrapNavbar.Brand as={Link} to="/">
            <img
              src="https://moneyplantfx.com/wp-content/uploads/2024/08/logo-mpfx.png"
              alt="MoneyPlantFX Logo"
              className="navbar-logo" // Style this class in Navbar.css
            />
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            {/* Keep ms-auto to align nav items to the right */}
            <Nav className="ms-auto align-items-center">
              {/* Navigation Links and Dropdowns (Structure remains the same) */}
              <Nav.Link as={Link} to="/" className="custom-nav-link">Home</Nav.Link>

              <NavDropdown title="About" id="about-dropdown" className="custom-dropdown">
                <NavDropdown.Item as={Link} to="/about">About Us</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/why-moneyplant">Why MoneyPlant</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/legal-documents">Legal Documents</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contact-us">Contact Us</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Accounts" id="accounts-dropdown" className="custom-dropdown">
                <NavDropdown.Item as={Link} to="/accounts">Account Types</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/funding">Funding</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/withdrawals">Withdrawals</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Markets" id="markets-dropdown" className="custom-dropdown">
                <NavDropdown.Item as={Link} to="/forex">Forex</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/indices">Indices</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/commodities">Commodities</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/crypto">Crypto</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/metals">Metals</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Platforms" id="platforms-dropdown" className="custom-dropdown">
                <NavDropdown.Item as={Link} to="/mt5">MetaTrader 5</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/web-terminal">Web Terminal</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/mobile-trading">Mobile Trading</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/news" className="custom-nav-link">News</Nav.Link>
              <Nav.Link as={Link} to="/blog" className="custom-nav-link">Blog</Nav.Link>

              {/* Action Buttons Area */}
              <div className="d-flex gap-2 ms-3 align-items-center">
                {/* Changed "Account" button variant to 'dark' */}
                <Button
                  variant="dark" // Use dark variant for the "Account" button
                  className="navbar-button navbar-button-account" // Use custom classes for fine-tuning
                  // Add onClick or href={...} if these link somewhere
                >
                  Login
                </Button>
                {/* Kept "Web Terminal" button variant as 'warning' */}
                <Button
                  variant="warning" // Keep warning variant for "Web Terminal"
                  className="navbar-button navbar-button-webterminal" // Use custom classes for fine-tuning
                  // Add onClick or href={...} if these link somewhere
                >
                  Web Terminal
                </Button>
              </div>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>

      {/* Running Text Bar (Marquee) - Structure remains the same */}
      <div className="running-text bg-warning text-white py-2">
        <Container>
          {/* Note: <marquee> is obsolete HTML. Consider CSS animations for a modern approach,
                     but keeping it here to match the target site's current implementation. */}
          <marquee behavior="scroll" direction="left" className="fw-semibold">
            Welcome to Moneyplant FX, an international online Forex and CFD trading firm offering 24-hour access to a diverse range of trading products including foreign exchange, stocks, commodities, futures, and indices.
          </marquee>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;