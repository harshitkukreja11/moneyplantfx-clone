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
import './Navbar.css'; // Make sure to include the CSS below in this file

const Navbar = () => {
  return (
    <div>
      {/* Main Navbar */}
      <BootstrapNavbar
        bg="white"
        expand="lg"
        className="shadow sticky-top z-50 custom-navbar"
      >
        <Container>
          <BootstrapNavbar.Brand as={Link} to="/">
            <img
              src="https://moneyplantfx.com/wp-content/uploads/2024/08/logo-mpfx.png"
              alt="MoneyPlantFX Logo"
              className="navbar-logo"
            />
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={Link} to="/" className="custom-nav-link">Home</Nav.Link>

              <Nav.Link as={Link} to="/About" className="custom-nav-link">About Us</Nav.Link>

              <NavDropdown title="Accounts" id="accounts-dropdown" className="custom-dropdown">
                <NavDropdown.Item as={Link} to="/accounts">Account Types</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/accounts">Funding</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/accounts">Withdrawals</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Market to Trade" id="markets-dropdown" className="custom-dropdown">
                <NavDropdown.Item as={Link} to="/Markets">Forex</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Markets">Indices</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Markets">Commodities</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Markets">Crypto</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Markets">Metals</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Platforms" id="platforms-dropdown" className="custom-dropdown">
                <NavDropdown.Item as={Link} to="/Platforms">MetaTrader 5</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Platforms">Web Terminal</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Platforms">Mobile Trading</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/news" className="custom-nav-link">News</Nav.Link>
              <Nav.Link as={Link} to="/blog" className="custom-nav-link">Blog</Nav.Link>
              <Nav.Link as={Link} to="/Contact" className="custom-nav-link">Contact Us</Nav.Link>

              <div className="d-flex gap-2 ms-3 align-items-center">
                <Button variant="dark" className="navbar-button navbar-button-account">
                  Login
                </Button>
                <Button variant="warning" className="navbar-button navbar-button-webterminal">
                  Web Terminal
                </Button>
              </div>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>

      {/* Modern Scrolling Text */}
      <div className="running-text bg-warning text-white py-2 overflow-hidden">
        <Container>
          <div className="scrolling-text fw-semibold">
            Welcome to Moneyplant FX, an international online Forex and CFD trading firm offering 24-hour access to a diverse range of trading products including foreign exchange, stocks, commodities, futures, and indices.
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
