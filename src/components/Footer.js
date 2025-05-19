import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Import custom styles for the footer

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-5">
      <Container>
        <Row>
          {/* Column 1: Trading Links */}
          <Col md={4} className="mb-4">
            <h5 className="footer-heading mb-3">Start Trading</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="/accounts" className="text-white d-block mb-2">Open Live Account</a></li>
              <li><a href="/platforms" className="text-white d-block mb-2">Open Demo Account</a></li>
              <li><a href="/markets" className="text-white d-block mb-2">Deposit Funds</a></li>
              <li><a href="/tools" className="text-white d-block mb-2">Funds Withdrawal</a></li>
              <li><a href="/partnership" className="text-white d-block mb-2">Platforms</a></li>
            </ul>
          </Col>

          {/* Column 2: Platform Links */}
          <Col md={4} className="mb-4">
            <h5 className="footer-heading mb-3">Platform</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="/news" className="text-white d-block mb-2">MT5 – MetaTrader</a></li>
              <li><a href="/careers" className="text-white d-block mb-2">MetaTrader - Google Play</a></li>
              <li><a href="/legal" className="text-white d-block mb-2">MetaTrader - App Store</a></li>
            </ul>
          </Col>

          {/* Column 3: Support Links */}
          <Col md={4} className="mb-4">
            <h5 className="footer-heading mb-3">24/5 Live Support</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="/accounts" className="text-white d-block mb-2">Client Portal Login</a></li>
              <li><a href="/platforms" className="text-white d-block mb-2">Partner Portal Login</a></li>
            </ul>
          </Col>
        </Row>

        {/* Horizontal rule */}
        <hr className="bg-secondary my-4" />

        {/* Legal and Risk Warnings */}
        <Row>
          <Col>
            <p className="small mb-2">
              <strong>Risk Warning:</strong> Trading in Forex/CFDs and other derivatives is highly speculative and involves a high level of risk...
            </p>

            <p className="small mb-2">
              <strong>Restricted Regions:</strong> Forex Trading is not allowed in some countries...
            </p>

            <p className="small mb-2">
              This website is owned by <strong>Moneyplant FX LTD</strong>, a Company registered under the laws of the United Kingdom...
            </p>

            <img
              src="https://moneyplantfx.com/wp-content/uploads/2024/07/payment-buttons-1536x92.png"
              width="100%"
              alt="newsletter, visa"
              className="my-4"
            />

            <hr className="my-4 border-primary" />

            <p className="small mb-2">
              <strong>Company Information:</strong> This website (www.moneyplantfx.com) is operated by <strong>ExpertPro Ltd</strong>...
            </p>

            <p className="small mb-2">
              <strong>ExpertPro Ltd</strong> owns and operates the “Moneyplantfx” brand.
            </p>

            <p className="small mb-2">
              <strong>Risk warning:</strong> Contracts for difference (‘CFDs’) is a complex financial product...
            </p>

            <p className="small mb-2">
              <strong>Regional Restrictions:</strong> ExpertPro Ltd does not offer services within the European Economic Area or to the USA, British Columbia, Canada, and some other regions.
            </p>

            <p className="small mb-0">
              ExpertPro Ltd does not issue advice, recommendations, or opinions in relation to acquiring, holding, or disposing of any financial product.
            </p>

            <hr className="my-4 border-primary" />
          </Col>
        </Row>

        {/* Footer Bottom Section */}
        <div className="footer-bottom pt-4 mt-4 border-light">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <p className="small mb-3 mb-md-0">
              &copy; {new Date().getFullYear()} MoneyPlantFX. All Rights Reserved.
            </p>
            <div className="d-flex gap-3">
              <a
                href="https://www.facebook.com/MoneyPlantFX"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-icon"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com/MoneyPlantFX"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="social-icon"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/MoneyPlantFX"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-icon"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
