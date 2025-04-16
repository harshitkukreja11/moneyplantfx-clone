// src/components/Footer.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Footer.css'; // Import custom styles for the footer

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-5">
      <Container>
        <Row>
          {/* Footer Column 1: Logo and Brief Description */}
          <Col md={4} className="mb-4">
            <div className="footer-logo">
              <img
                src="https://moneyplantfx.com/wp-content/uploads/2024/08/logo-mpfx.png"
                alt="MoneyPlantFX Logo"
                className="footer-logo-img"
              />
            </div>
            <p className="footer-description">
              MoneyPlantFX offers innovative Forex and CFD trading services with a range of powerful tools and real-time analytics.
            </p>
          </Col>

          {/* Footer Column 2: Useful Links */}
          <Col md={4} className="mb-4">
            <h5 className="footer-heading">Useful Links</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About Us</a></li>
              <li><a href="/accounts" className="text-white">Accounts</a></li>
              <li><a href="/markets" className="text-white">Markets</a></li>
              <li><a href="/platforms" className="text-white">Platforms</a></li>
              <li><a href="/news" className="text-white">News</a></li>
              <li><a href="/blog" className="text-white">Blog</a></li>
            </ul>
          </Col>

          {/* Footer Column 3: Contact and Social Media */}
          <Col md={4} className="mb-4">
            <h5 className="footer-heading">Contact Us</h5>
            <p>Email: support@moneyplantfx.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <div className="footer-socials">
              <Button variant="link" className="text-white me-3" href="https://www.facebook.com/MoneyPlantFX">
                <i className="fab fa-facebook"></i>
              </Button>
              <Button variant="link" className="text-white me-3" href="https://twitter.com/MoneyPlantFX">
                <i className="fab fa-twitter"></i>
              </Button>
              <Button variant="link" className="text-white" href="https://www.linkedin.com/company/MoneyPlantFX">
                <i className="fab fa-linkedin"></i>
              </Button>
            </div>
          </Col>
        </Row>
        <p className="small mb-2">
          <strong>Risk Warning:</strong> Trading in Forex/CFDs and other derivatives is highly speculative and involves a high level of risk. You may lose your entire capital. These products may not be suitable for everyone and you should ensure you understand the risks involved. Seek independent advice if necessary. Only speculate with money that you can afford to lose. Nothing in this site should be read or construed as constituting advice on the part of MONEYPLANT FX LTD or any of its affiliates, directors, officers or employees.
        </p>
        <p className="small mb-2">
          <strong>Restricted Regions:</strong> Forex Trading is not allowed in some countries. Before investing your money, make sure your country allows it. Moneyplant FX LTD does not provide services for citizens/residents of the United States, Cuba, Iraq, Myanmar, North Korea, Sudan.
        </p>
        <p className="small mb-2">
          This website is owned and operated by <strong>Moneyplant FX LTD</strong>, a Company registered under the laws of the United Kingdom with Company number <strong>11086789</strong> and registered address at <strong>C/O Burney Tomar Ltd. 32 Nova Road, Croydon, United Kingdom, CRO 2TL</strong>.
        </p>
        <p className="small mb-2">
          <strong>Company Information:</strong> This website (www.moneyplantfx.com) is operated by <strong>ExpertPro Ltd</strong>, a Company registered in Saint Lucia, authorised and regulated by the Mwali International Services Authority with license number <strong>T2023380</strong>. ExpertPro Ltd is located at Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia.
        </p>
        <p className="small mb-2">
          <strong>ExpertPro Ltd</strong> owns and operates the “Moneyplantfx” brand.
        </p>
        <p className="small mb-2">
          <strong>Risk warning:</strong> Contracts for difference (‘CFDs’) is a complex financial product, with speculative character, the trading of which involves significant risks of loss of capital. Trading CFDs may result in the loss of your entire balance. Leverage can work to your advantage and disadvantage. CFDs traders do not own, or have rights to, the underlying assets.
        </p>
        <p className="small mb-2">
          <strong>Regional Restrictions:</strong> ExpertPro Ltd does not offer services within the European Economic Area or to the USA, British Columbia, Canada, and some other regions.
        </p>
        <p className="small mb-0">
          ExpertPro Ltd does not issue advice, recommendations, or opinions in relation to acquiring, holding, or disposing of any financial product.
        </p>

        {/* Footer Bottom Section */}
        <div className="footer-bottom text-center pt-4">
          <p>&copy; 2025 MoneyPlantFX. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;