// src/components/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Navbar as BootstrapNavbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Row,
  Col,
} from 'react-bootstrap';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="main-navbar-container">
      {/* Top white row with logo and buttons */}
      <div className="top-navbar bg-white py-2 shadow-sm">
        <Container>
          <Row className="align-items-center">
            <Col xs={6} className="d-flex align-items-center">
              <Link to="/">
                <img
                  src="https://moneyplantfx.com/wp-content/uploads/2024/08/logo-mpfx.png"
                  alt="MoneyPlantFX Logo"
                  className="navbar-logo"
                />
              </Link>
            </Col>
            <Col xs={6} className="d-flex justify-content-end gap-2">
              <Button
                variant="dark"
                className="navbar-button navbar-button-account"
              >
                Account
              </Button>
              <Button
                variant="warning"
                className="navbar-button navbar-button-webterminal"
              >
                Web Terminal
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Bottom blue row with nav links */}
      <BootstrapNavbar expand="lg" className="custom-navbar shadow">
        <Container>
          <BootstrapNavbar.Toggle aria-controls="main-nav" />
          <BootstrapNavbar.Collapse id="main-nav">
            <Nav className="mx-auto align-items-center">
              <Nav.Link
                as={Link}
                to="/"
                className={`custom-nav-link ${isActive('/') ? 'active' : ''}`}
              >
                Home
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/about"
                className={`custom-nav-link ${isActive('/about') ? 'active' : ''}`}
              >
                About Us
              </Nav.Link>

              <NavDropdown title="Accounts" id="accounts-dropdown" className="custom-dropdown">
                <NavDropdown.Item as={Link} to="/accounts">Account Types</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/accounts">Funding</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/accounts">Withdrawals</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Market to Trade" id="markets-dropdown" className="custom-dropdown">
                <NavDropdown.Item as={Link} to="/markets">Forex</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/markets">Indices</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/markets">Commodities</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/markets">Crypto</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/markets">Metals</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Platforms" id="platforms-dropdown" className="custom-dropdown">
                <NavDropdown.Item as={Link} to="/platforms">MetaTrader 5</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/platforms">Web Terminal</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/platforms">Mobile Trading</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                as={Link}
                to="/news"
                className={`custom-nav-link ${isActive('/news') ? 'active' : ''}`}
              >
                News
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/blog"
                className={`custom-nav-link ${isActive('/blog') ? 'active' : ''}`}
              >
                Blog
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                className={`custom-nav-link ${isActive('/contact') ? 'active' : ''}`}
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>

      {/* Marquee scrolling text */}
      <div className="running-text py-2 text-white overflow-hidden">
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
