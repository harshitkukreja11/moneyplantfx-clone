// src/pages/Platforms.js
import React, { useEffect } from 'react'; // Import useEffect
import { Container, Row, Col,Button } from 'react-bootstrap';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles


const MobileTrading = () => {
   useEffect(() => {
        AOS.init({
          duration: 1000, // values from 0 to 3000, with step 50ms
          once: false, // whether animation should happen only once - while scrolling down
          });
      // Optional: Refresh AOS on component updates if content changes dynamically
      // AOS.refresh();
    }, []);
  return (
    <>
      {/* Hero Section with white background */}
      <div className="py-5 bg-white">
        <Container className="text-center text-dark py-1">
          <h1 className="display-8  mb-1"data-aos="fade-down" style={{ color: '#0050a0' }}>
          MOBILE TRADING APP FOR<br></br>
SMARTPHONES OR TABLETS
          </h1>
          <p className=" mb-1 " style={{color: "#8a8a8a"}}>
Our most powerful mobile trading platform lets you trade on the go, wherever you are.Download the MetaTrader 5  to enjoy powerful functionality such as: </p>
      
        </Container>
      </div>


     {/* MetaTrader 5 Section */}
<div className="py-5">
  <Container>
    <Row className="align-items-center">
      {/* Text with ticks */}
      <Col lg={7}>
        <h3 className="mb-4" style={{ color: '#0050a0', fontWeight: '600' }}>
          METATRADER 5 FOR ANDROID AND IOS*
        </h3>

        <ul className="list-unstyled mb-4">
          {[
            "Real-time quotes",
            "Trading history",
            "Built-in market analysis tools, including 30 technical indicators and 24 analytical objects",
            "Full-featured trading system, including Market Depth",
            "Multiple chart types and time frames",
            "Netting and hedging functionality",
            "Built-in chat",
            "Up-to-date financial news and push notifications",
            "iPad-optimisation",
            "All trade orders available",
            "All execution methods available",
            "Complete control of your trading account"
          ].map((item, index) => (
            <li key={index} className="d-flex align-items-start mb-2">
              <span
                className="me-2"
                style={{
                  color: '#0050a0',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  lineHeight: '1.4',
                }}
              >
                ✓
              </span>
              <span style={{ color: '#ff6600', lineHeight: '1.4' }}>{item}</span>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
          <button
            className="btn"
            style={{
              backgroundColor: 'lightgreen',
              color: 'white',
              border: 'none',
              padding: '8px 20px',
              fontWeight: 'bold'
            }}
          >
            Open Trading Account
          </button>

          <Button
            size="lg"
            className="d-flex align-items-center px-4 py-4"
            style={{
              backgroundColor: '#EEEEEE',
              border: 'none',
              borderRadius: '10%',
              height:"80px",
              gap:"25%",
              width:"250px",
              marginLeft:"80px"
            }}
          >
            <img
              src="https://moneyplantfx.com/wp-content/uploads/2024/07/play-store.png"
              alt="Play Store"
              className="me-2"
              style={{ height: '60px' }}
            />
            <img
              src="https://moneyplantfx.com/wp-content/uploads/2024/07/android.png"
              alt="Android"
              className="me-2"
              style={{ height: '60px' }}
            />
          </Button>
        </div>

        <p className="text-muted small mb-0">
          *System specs: iOS 4.0 / Android 2.1 or later. 3G/WiFi connection required. *Trading involves risk. You may lose your capital.
        </p>
      </Col>

      {/* Image on right */}
      <Col lg={5} className="text-center mt-4 mt-lg-0">
        <img
          src="https://moneyplantfx.com/wp-content/uploads/2024/07/tablet.png"
          alt="MetaTrader 5"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </Col>
    </Row>
  </Container>
</div>

     




      
    </>
  );
};

export default MobileTrading;
