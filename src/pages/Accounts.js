import React, { useEffect } from 'react'; // Import useEffect
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles

const accountsData = [
  {
    title: "STANDARD",
    spreads: "From 1.2 pips",
    leverage: "Up to 1:500",
    commission: "No",
    minDeposit: "$100",
    baseCurrency: "USD/EUR",
    execution: "Market",
    marginCall: "50%",
    stopOutLevel: "20%",
    easAllowed: "Yes",
    support: "24/5",
    bestFor: "Beginners & Experienced Traders",
    recommended: true,
    detailsLink: "/standard-account-details"
  },
];

const Accounts = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      once: false, // whether animation should happen only once - while scrolling down
      // mirror: true, // whether elements should animate out while scrolling past them
      // offset: 120, // offset (in px) from the original trigger point
      // delay: 100, // values from 0 to 3000, with step 50ms
      // easing: 'ease-in-out', // default easing for AOS animations
    });
    // Optional: Refresh AOS on component updates if content changes dynamically
    // AOS.refresh();
  }, []);

  return (
    <div className="bg-light py-5">
      <Container>
        <h2 className="text-center fw-bold mb-5" data-aos="fade-down" style={{ color: '#0050a0' }}>ACCOUNT TYPES</h2>
        <p className="text-center text-muted mb-4">
          Your experience and skillset won’t affect your earnings! We at Moneyplant provide you full set of tools for successful trading.
        </p>
        <Row className="justify-content-center">
          {accountsData.map((account, index) => (
            <Col key={index} md={12} lg={6} xl={5} className="mb-4 d-flex justify-content-center">
  <Card
    className="h-100 border-0 custom-card"
    style={{
      width: '100%',
      maxWidth: '500px',
      boxShadow: '0px 0px 27px 0px rgba(0, 0, 0, 0.5)',
      borderRadius: '20px',
      padding: '30px',
      display: 'flex',
      gap: '10px',
    }}
  >

                <Card.Body style={{ color: '#fc6716' }} className="d-flex flex-column justify-content-between">
                  <div>
                    <div className="text-center mb-3">
                      <Card.Title className="fs-4 fw-semibold text-dark mb-1" data-aos="fade-down"  style={{fontsize: "35px",fontfamily: "Roboto"- "Sans-serif",fontweight: "400"}}>
                        {account.title}
                      </Card.Title>
                       <hr style={{ borderTop: '1px solid #000' }} />
                      <small className="text-muted" data-aos="fade-down" >$100/ EQUIVALENT MINIMUM DEPOSIT</small>
                    </div>

                    <ul className="list-unstyled mb-4">
                      <li className="mb-2"><FaCheck className="me-2 text-primary" /> Spreads: {account.spreads}</li>
                      <hr style={{ borderTop: '1px solid #000' }} />
                      <li className="mb-2"><FaCheck className="me-2 text-primary" /> Leverage: {account.leverage}</li>
                      <hr style={{ borderTop: '1px solid #000' }} />
                      <li className="mb-2"><FaCheck className="me-2 text-primary" /> Commission: {account.commission}</li>
                      <hr style={{ borderTop: '1px solid #000' }} />
                      <li className="mb-2"><FaCheck className="me-2 text-primary" /> Min. Deposit: {account.minDeposit}</li>
                      <hr style={{ borderTop: '1px solid #000' }} />
                      {account.baseCurrency && <>
                        <li className="mb-2"><FaCheck className="me-2 text-primary" /> Base Currency: {account.baseCurrency}</li>
                        <hr style={{ borderTop: '1px solid #000' }} />
                      </>}
                      {account.execution && <>
                        <li className="mb-2"><FaCheck className="me-2 text-primary" /> Execution: {account.execution}</li>
                        <hr style={{ borderTop: '1px solid #000' }} />
                      </>}
                      {account.marginCall && <>
                        <li className="mb-2"><FaCheck className="me-2 text-primary" /> Margin Call: {account.marginCall}</li>
                        <hr style={{ borderTop: '1px solid #000' }} />
                      </>}
                      {account.stopOutLevel && <>
                        <li className="mb-2"><FaCheck className="me-2 text-primary" /> Stop-Out Level: {account.stopOutLevel}</li>
                        <hr style={{ borderTop: '1px solid #000' }} />
                      </>}
                      {account.easAllowed && <>
                        <li className="mb-2"><FaCheck className="me-2 text-primary" /> EA's Allowed: {account.easAllowed}</li>
                        <hr style={{ borderTop: '1px solid #000' }} />
                      </>}
                      {account.support && <>
                        <li className="mb-2"><FaCheck className="me-2 text-primary" /> Support: {account.support}</li>
                        <hr style={{ borderTop: '1px solid #000' }} />
                      </>}
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Accounts;
