import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './Footer.css'; // Import custom styles for the footer

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-5">
      <Container>
        <Row>
         

          {/* --- Column 1: Trading Links --- */}
          <Col md={4} className="mb-4">
            <h5 className="footer-heading mb-3"> Start Trading</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="/accounts" className="text-white d-block mb-2">Open Live Account</a></li> {/* Added d-block and mb-2 for spacing */}
              <li><a href="/platforms" className="text-white d-block mb-2">Open Demo Account</a></li>
              <li><a href="/markets" className="text-white d-block mb-2">Deposit Funds</a></li>
              <li><a href="/tools" className="text-white d-block mb-2">Funds Withdrawal</a></li> {/* Assuming a tools page */}
              <li><a href="/partnership" className="text-white d-block mb-2">Platforms</a></li> {/* Or Affiliates etc. */}
              {/* Add other relevant trading links */}
            </ul>
          </Col>

          {/* --- Column 2: Company Links --- */}
          <Col md={4} className="mb-4">
            <h5 className="footer-heading mb-3">Platform</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="/news" className="text-white d-block mb-2">MT5 – MetaTrader</a></li>
              <li><a href="/careers" className="text-white d-block mb-2">MetaTrader-Google Play</a></li> {/* If applicable */}
              <li><a href="/legal" className="text-white d-block mb-2">MetaTrader-App Store</a></li> {/* Or Terms etc. */}
            </ul>
          </Col>
      
        {/* --- Column 3: Trading Links --- */}
        <Col md={4} className="mb-4">
            <h5 className="footer-heading mb-3">24/5 Live Support</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="/accounts" className="text-white d-block mb-2">Client Portal Login</a></li> {/* Added d-block and mb-2 for spacing */}
              <li><a href="/platforms" className="text-white d-block mb-2">Partner Portal Login</a></li>
            </ul>
          </Col>
          </Row>

        <hr className="bg-secondary my-4" /> 

        {/* --- Risk Warnings and Legal Text --- */}
        {/* Using the detailed text from your initial example */}
        <Row>
            <Col> {/* Making legal text full width */}
                <p className="small mb-2">
                <strong>Risk Warning:</strong> Trading in Forex/CFDs and other derivatives is highly speculative and involves a high level of risk. You may lose your entire capital. These products may not be suitable for everyone and you should ensure you understand the risks involved. Seek independent advice if necessary. Only speculate with money that you can afford to lose. Nothing in this site should be read or construed as constituting advice on the part of MONEYPLANT FX LTD or any of its affiliates, directors, officers or employees.
                </p>
                <br></br>
                <br></br>
                <p className="small mb-2">
                <strong>Restricted Regions:</strong> Forex Trading is not allowed in some countries. Before investing your money, make sure your country allows it. Moneyplant FX LTD does not provide services for citizens/residents of the United States, Cuba, Iraq, Myanmar, North Korea, Sudan.
                </p>
                <br></br>
                <br></br>
                 <p className="small mb-2">
                 This website is owned by <strong>Moneyplant FX LTD</strong>, a Company registered under the laws of the United Kingdom with Company number <strong>11086789</strong> and registered address at <strong>C/O Burney Tomar Ltd. 32 Nova Road, Croydon, United Kingdom, CRO 2TL</strong>.
                 </p>
                 <br></br>
                <p className="small mb-2">
                  <img src='https://moneyplantfx.com/wp-content/uploads/2024/07/payment-buttons-1536x92.png' width="100%" alt='newsletter,visa'></img>

                  <hr class="my-4 border-primary" />
                <strong>Company Information:</strong> This website (www.moneyplantfx.com) is operated by <strong>ExpertPro Ltd</strong>, a Company registered in Saint Lucia, authorised and regulated by the Mwali International Services Authority with license number <strong>T2023380</strong>. ExpertPro Ltd is located at Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia.
                </p>
                <br></br>
                <br></br>
                <p className="small mb-2">
                <strong>ExpertPro Ltd</strong> owns and operates the “Moneyplantfx” brand.
                </p>
                <br></br>
                <br></br>
                <p className="small mb-2">
                <strong>Risk warning:</strong>  Contracts for difference (‘CFDs’) is a complex financial product, with speculative character, the trading of which involves significant risks of loss of capital. Trading CFDs, which is a marginal product, may result in the loss of your entire balance. Remember that leverage in CFDs can work both to your advantage and disadvantage. CFDs traders do not own, or have any rights to, the underlying assets. Trading CFDs is not appropriate for all investors. Past performance does not constitute a reliable indicator of future results. Future forecasts do not constitute a reliable indicator of future performance. Before deciding to trade, you should carefully consider your investment objectives, level of experience and risk tolerance. You should not deposit more than you are prepared to lose. Please ensure you fully understand the risk associated with the product envisaged and seek independent advice, if necessary. Please read our Risk Disclosure document.
                </p>
                <br></br>
                <br></br>
                <p className="small mb-2">
                <strong>Regional Restrictions:</strong> ExpertPro Ltd does not offer services within the European Economic Area or to the USA, British Columbia, Canada, and some other regions.
                </p>
                <br></br>
                <br></br>
                <p className="small mb-0">
                ExpertPro Ltd does not issue advice, recommendations, or opinions in relation to acquiring, holding, or disposing of any financial product.
                </p>
                <br></br>
                <hr class="my-4 border-primary" />
            </Col>
        </Row>


    
        {/* --- Footer Bottom Section --- */}
<div className="footer-bottom pt-4 mt-4  border-light ">
  <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
    {/* Left Side: Copyright */}
    <p className="small mb-3 mb-md-0">
      &copy; {new Date().getFullYear()} MoneyPlantFX. All Rights Reserved.
    </p>

    {/* Right Side: Social Icons */}
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