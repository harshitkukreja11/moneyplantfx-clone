// src/pages/Platforms.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Platforms.css';

const Platforms = () => {
  return (
    <>
      {/* Hero Section with white background */}
      <div className="py-5 bg-white">
        <Container className="text-center text-dark py-5">
          <h1 className="display-4 fw-bold mb-4">
             An Ultimate Solution for Your Online Trading
          </h1>
          <p className="lead mb-4">
          MetaTrader 5 trading platform is the best choice for the modern trader. Successful trading on financial markets begins with a comfortable and multi-functional trading platform. It offering outstanding trading possibilities and technical analysis tools. All-in-one platform for trading Forex, Stocks and Futures. Moneyplant allows you to enjoy the freedom of movement to the full extent
          </p>
      
        </Container>
      </div>

      {/* Features Section */}
      <div className="bg-light py-5">
        <Container>
          <h2 className="text-center fw-bold text-primary mb-5">What Does MetaTrader 5 Offer?</h2>
          <Row className="g-4">
            {[
              {
                title: 'Technical Analysis Tools',
                description: 'MetaTrader 5 offers a full set of tools for technical analysis and breaking financial news.',
                image: 'https://moneyplantfx.com/wp-content/uploads/2024/07/fullset-technical.png',
              },
              {
                title: 'Fundamental Analysis',
                description: 'Get market news updates and use them to predict market movements.',
                image: 'https://moneyplantfx.com/wp-content/uploads/2024/07/fundamental-analysis.png',
              },
              {
                title: 'Algorithmic Trading',
                description: 'Powerful algorithmic trading with built-in MQL5 development toolkit.',
                image: 'https://moneyplantfx.com/wp-content/uploads/2024/07/powerful-algorithmic.png',
              },
              {
                title: 'Unlimited Number of Charts',
                description: 'Open as many charts as needed for detailed market analysis.',
                image: 'https://moneyplantfx.com/wp-content/uploads/2024/07/unlimited-number.png',
              },
              {
                title: 'Advanced Alerts System',
                description: 'Set custom alerts for important market events to never miss a trade.',
                image: 'https://moneyplantfx.com/wp-content/uploads/2024/07/advanced-alerts.png',
              },
              {
                title: 'Ready-to-Use Trading Apps',
                description: 'A selection of ready-to-use trading applications on the MetaTrader Market.',
                image: 'https://moneyplantfx.com/wp-content/uploads/2024/07/selectionof-ready.png',
              },
              {
                title: 'Easy Order Execution',
                description: 'Easily execute and perform extensive order hedging.',
                image: 'https://moneyplantfx.com/wp-content/uploads/2024/07/abilityto-easily.png',
              },
              {
                title: 'Featured Trade Signals',
                description: '30 technical indicators, 24 analytical objects, and fully-featured trade signals.',
                image: 'https://moneyplantfx.com/wp-content/uploads/2024/07/featured-trade.png',
              },
            ].map((p, i) => (
              <Col md={6} lg={3} key={i}>
                <div className="feature-card text-center">
                  <img src={p.image} alt={p.title} className="w-100 feature-img mb-3" />
                  <h5 className="fw-bold">{p.title}</h5>
                  <p>{p.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

     {/* Download Section */}
<div style={{ backgroundColor: '#f1f1f1' }} className="text-dark py-5">
  <Container className="text-center">
    <h2 className="fw-bold mb-4">Start Trading Today</h2>
    <p className="lead mb-4">
      MetaTrader 5 is available for Desktop and Mobile. Download now and start trading with the best tools!
    </p>
    <div className="d-flex justify-content-center gap-4 flex-wrap">
      <Button variant="dark" size="lg" className="px-5 py-3">
        <img src="https://moneyplantfx.com/wp-content/uploads/2024/07/window.png" alt="Windows" className="me-2" />
        Download for Desktop
      </Button>
      <Button variant="outline-dark" size="lg" className="px-5 py-3">
        <img src="https://moneyplantfx.com/wp-content/uploads/2024/07/ubuntu.png" alt="Phone" className="me-2" />
        Download for Phone
      </Button>
    </div>
  </Container>
</div>


      
    </>
  );
};

export default Platforms;
