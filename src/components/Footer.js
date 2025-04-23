import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Footer.css'; // Import custom styles for the footer

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-5">
      <Container>
        <Row>
          {/* --- Column 1: Logo, Description, Social --- */}
          <Col md={4} className="mb-4">
            <div className="footer-logo mb-3"> {/* Added margin-bottom */}
              <img
                src="https://moneyplantfx.com/wp-content/uploads/2024/08/logo-mpfx.png"
                alt="MoneyPlantFX Logo"
                className="footer-logo-img" // Ensure this class controls size appropriately
                // style={{ maxWidth: '200px', height: 'auto' }} // Optional inline style for size control
              />
            </div>
            <p className="footer-description small mb-3"> {/* Added margin-bottom */}
              MoneyPlantFX offers innovative Forex and CFD trading services with a range of powerful tools and real-time analytics.
            </p>
            {/* Social Media Icons */}
            <div className="footer-socials">
              <Button variant="link" className="text-white ps-0 pe-3" href="https://www.facebook.com/MoneyPlantFX" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i> {/* Using fa-facebook-f for the outlined 'f' often seen */}
              </Button>
              <Button variant="link" className="text-white px-3" href="https://twitter.com/MoneyPlantFX" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </Button>
              <Button variant="link" className="text-white px-3" href="https://www.linkedin.com/company/MoneyPlantFX" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i> {/* Using fa-linkedin-in */}
              </Button>
               {/* Add other social icons if needed, e.g., Instagram, YouTube */}
               {/*
               <Button variant="link" className="text-white px-3" href="https://instagram.com/..." target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                 <i className="fab fa-instagram"></i>
               </Button>
               */}
            </div>
          </Col>

          {/* --- Column 2: Trading Links --- */}
          <Col md={4} className="mb-4">
            <h5 className="footer-heading mb-3">Trading</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="/accounts" className="text-white d-block mb-2">Accounts</a></li> {/* Added d-block and mb-2 for spacing */}
              <li><a href="/platforms" className="text-white d-block mb-2">Platforms</a></li>
              <li><a href="/markets" className="text-white d-block mb-2">Markets</a></li>
              <li><a href="/tools" className="text-white d-block mb-2">Tools</a></li> {/* Assuming a tools page */}
              <li><a href="/partnership" className="text-white d-block mb-2">Partnership</a></li> {/* Or Affiliates etc. */}
              {/* Add other relevant trading links */}
            </ul>
          </Col>

          {/* --- Column 3: Company Links --- */}
          <Col md={4} className="mb-4">
            <h5 className="footer-heading mb-3">Company</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="/about" className="text-white d-block mb-2">About Us</a></li>
              <li><a href="/contact" className="text-white d-block mb-2">Contact Us</a></li>
              <li><a href="/blog" className="text-white d-block mb-2">Blog</a></li>
              <li><a href="/news" className="text-white d-block mb-2">News</a></li>
              <li><a href="/careers" className="text-white d-block mb-2">Careers</a></li> {/* If applicable */}
              <li><a href="/legal" className="text-white d-block mb-2">Legal Documents</a></li> {/* Or Terms etc. */}
            </ul>
          </Col>
        </Row>

        <hr className="bg-secondary my-4" /> {/* Optional separator */}

        {/* --- Risk Warnings and Legal Text --- */}
        {/* Using the detailed text from your initial example */}
        <Row>
            <Col> {/* Making legal text full width */}
                <p className="small mb-2">
                <strong>Risk Warning:</strong> Trading in Forex/CFDs and other derivatives is highly speculative and involves a high level of risk. You may lose your entire capital. These products may not be suitable for everyone and you should ensure you understand the risks involved. Seek independent advice if necessary. Only speculate with money that you can afford to lose. Nothing in this site should be read or construed as constituting advice on the part of MONEYPLANT FX LTD or any of its affiliates, directors, officers or employees.
                </p>
                <p className="small mb-2">
                <strong>Restricted Regions:</strong> Forex Trading is not allowed in some countries. Before investing your money, make sure your country allows it. Moneyplant FX LTD does not provide services for citizens/residents of the United States, Cuba, Iraq, Myanmar, North Korea, Sudan.
                </p>
                 <p className="small mb-2">
                 This website is owned by <strong>Moneyplant FX LTD</strong>, a Company registered under the laws of the United Kingdom with Company number <strong>11086789</strong> and registered address at <strong>C/O Burney Tomar Ltd. 32 Nova Road, Croydon, United Kingdom, CRO 2TL</strong>.
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
            </Col>
        </Row>


        {/* --- Footer Bottom Section --- */}
        <div className="footer-bottom text-center pt-4 mt-4"> {/* Added margin-top */}
          <p className="small">&copy; {new Date().getFullYear()} MoneyPlantFX. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;