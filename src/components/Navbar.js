import React, {  useState } from 'react';
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
  const [expanded, setExpanded] = useState(false); // Track navbar expanded state
  const [openDropdown, setOpenDropdown] = useState(null); // Track open dropdown id

  const isActive = (path) => location.pathname === path;
  



  return (
    <div className="main-navbar-container">
      {/* Top white row with logo and buttons */}
      <div className="top-navbar bg-white py-2 shadow-sm">
        <Container>
          <Row className="align-items-center">
            <Col xs={6} className="d-flex align-items-center">
              <Link to="/" onClick={() => setExpanded(false)}>
                <img
                  src="https://moneyplantfx.com/wp-content/uploads/2024/08/logo-mpfx.png"
                  alt="MoneyPlantFX Logo"
                  className="navbar-logo"
                />
              </Link>
            </Col>
            <Col xs={6} className="d-flex justify-content-end gap-2">
              <Button className="navbar-button-login">Login</Button>
              <Button className="navbar-button-webterminal">Web Terminal</Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Bottom blue row with nav links */}
      <BootstrapNavbar
        expand="lg"
        className="custom-navbar shadow"
        expanded={expanded}
        onToggle={(isExpanded) => {
          setExpanded(isExpanded);
          if (!isExpanded) setOpenDropdown(null); // close dropdowns if navbar closes
        }}
      >
        <Container>
          <BootstrapNavbar.Toggle aria-controls="main-nav" />
          <BootstrapNavbar.Collapse id="main-nav">
            <Nav className="mx-auto align-items-center">
              <Nav.Link
                as={Link}
                to="/"
                className={`custom-nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={() => {
                  setExpanded(false);
                  setOpenDropdown(null);
                }}
              >
                Home
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/about"
                className={`custom-nav-link ${isActive('/about') ? 'active' : ''}`}
                onClick={() => {
                  setExpanded(false);
                  setOpenDropdown(null);
                }}
              >
                About Us
              </Nav.Link>

              <NavDropdown
                title="Accounts"
                id="accounts-dropdown"
                className="custom-dropdown"
                show={openDropdown === 'accounts'}
                onToggle={(isOpen) =>
                  setOpenDropdown(isOpen ? 'accounts' : null)
                }
              >
                <NavDropdown.Item
                  as={Link}
                  to="/accounts"
                  onClick={() => {
                    setExpanded(false);
                    setOpenDropdown(null);
                  }}
                >
                  Account Types
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/Deposit"
                  onClick={() => {
                    setExpanded(false);
                    setOpenDropdown(null);
                  }}
                >
                  Deposit Options
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/Withdrawl"
                  onClick={() => {
                    setExpanded(false);
                    setOpenDropdown(null);
                  }}
                >
                  Withdrawals Options
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Market to Trade"
                id="markets-dropdown"
                className="custom-dropdown"
                show={openDropdown === 'markets'}
                onToggle={(isOpen) =>
                  setOpenDropdown(isOpen ? 'markets' : null)
                }
              >
                <NavDropdown.Item
                  as={Link}
                  to="/markets"
                  onClick={() => {
                    setExpanded(false);
                    setOpenDropdown(null);
                  }}
                >
                  Forex
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/PreciousMetal"
                  onClick={() => {
                    setExpanded(false);
                    setOpenDropdown(null);
                  }}
                >
                  Precious Metals
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/Energy"
                  onClick={() => {
                    setExpanded(false);
                    setOpenDropdown(null);
                  }}
                >
                  Energy
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/Indices"
                  onClick={() => {
                    setExpanded(false);
                    setOpenDropdown(null);
                  }}
                >
                  Indices
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/Shares"
                  onClick={() => {
                    setExpanded(false);
                    setOpenDropdown(null);
                  }}
                >
                  Shares
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Platforms"
                id="platforms-dropdown"
                className="custom-dropdown"
                show={openDropdown === 'platforms'}
                onToggle={(isOpen) =>
                  setOpenDropdown(isOpen ? 'platforms' : null)
                }
              >
                <NavDropdown.Item
                  as={Link}
                  to="/platforms"
                  onClick={() => {
                    setExpanded(false);
                    setOpenDropdown(null);
                  }}
                >
                  MetaTrader 5
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/Trading"
                  onClick={() => {
                    setExpanded(false);
                    setOpenDropdown(null);
                  }}
                >
                  Copy Trading
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/MobileTrading"
                  onClick={() => {
                    setExpanded(false);
                    setOpenDropdown(null);
                  }}
                >
                  Mobile Trading Apps
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                as={Link}
                to="/news"
                className={`custom-nav-link ${isActive('/news') ? 'active' : ''}`}
                onClick={() => {
                  setExpanded(false);
                  setOpenDropdown(null);
                }}
              >
                News And Promos
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/blog"
                className={`custom-nav-link ${isActive('/blog') ? 'active' : ''}`}
                onClick={() => {
                  setExpanded(false);
                  setOpenDropdown(null);
                }}
              >
                Blog
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/contact"
                className={`custom-nav-link ${isActive('/contact') ? 'active' : ''}`}
                onClick={() => {
                  setExpanded(false);
                  setOpenDropdown(null);
                }}
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
