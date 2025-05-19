// src/pages/Platforms.js
import React, { useEffect } from 'react'; // Import useEffect
import { Container, Row, Col,Button } from 'react-bootstrap';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import './Platforms.css';

const Platforms = () => {
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
          <h1 className="display-8  mb-3"data-aos="fade-down" style={{ color: '#0050a0' }}>
             AN ULTIMATE SOLUTION<br></br><b>FOR YOUR ONLINE TRADING</b>
          </h1>
          <p className=" mb-1 fs-6" style={{color: "#8a8a8a"}}>
          MetaTrader 5 trading platform is the best choice for the modern trader. Successful trading on financial markets begins with a comfortable and multi-functional trading platform. It offering outstanding trading possibilities and technical analysis tools. All-in-one platform for trading Forex, Stocks and Futures. Moneyplant allows you to enjoy the freedom of movement to the full extent
          </p>
      
        </Container>
      </div>

      {/* Features Section */}
      <div className=" py-0">
        <Container>
          <h2 className="text-center fw-bold  mb-0"data-aos="fade-down" style={{ color: '#0050a0' }}>WHAT DOES THE METATRADER 5 OFFER?</h2>
          <Row className="g-0">
            {[
              {
                description: 'A full set of technical analysis tools and alert on breaking financial news',
                image: 'https://moneyplantfx.com/wp-content/uploads/2024/07/fullset-technical.png',
              },
              {
                
                description: 'Fundamental analysis on market news',
                image: 'https://moneyplantfx.com/wp-content/uploads/2024/07/fundamental-analysis.png',
              },
              {
                
                description: 'Powerful algorithmic trading with built-in MQL5 development toolkit',
                image: 'https://moneyplantfx.com/wp-content/uploads/2024/07/powerful-algorithmic.png',
              },
              {
                
                description: 'An unlimited number of chart and one-minute history of quotes',
                image: 'https://moneyplantfx.com/wp-content/uploads/2024/07/unlimited-number.png',
              },
              {
               
                description: 'An advanced alerts system to keep track of all important market events',
                image: 'https://moneyplantfx.com/wp-content/uploads/2024/07/advanced-alerts.png',
              },
              {
               
                description: 'A selection of ready-to-use trading applications on the MetaTrader Market.',
                image: 'https://moneyplantfx.com/wp-content/uploads/2024/07/selectionof-ready.png',
              },
              {
                
                description: 'Ability to easily execute and perform extensive order hedging',
                image: 'https://moneyplantfx.com/wp-content/uploads/2024/07/abilityto-easily.png',
              },
              {
               
                description: 'Fully-featured Trade signals, 30 technical indicators, and 24 analytical objects',
                image: 'https://moneyplantfx.com/wp-content/uploads/2024/07/featured-trade.png',
              },
            ].map((p, i) => (
              <Col md={6} lg={3} key={i}>
                <div className="feature-card text-center">
                  <img src={p.image} alt={p.title} className="w-20 feature-img" />
                  <p className="fw-semibold"style={{color: '#0050a0'}}>{p.description}</p>
                </div>
              </Col>
            ))}
          </Row>
          <p className="fw-semibold fs-5 text-center"data-aos="fade-down"style={{color: '#0050a0'}}>A multi-functional, modern and comfortable platform lays the pathway to successful trading on financial markets. Moneyplant MetaTrader 5 is the best choice for the modern trader!</p>
        </Container>
      </div>

 {/* Download Section */}
{/* Download Section */}
<div className="py-5">
  <Container className="text-center">
    <div className="d-flex justify-content-center gap-4 flex-nowrap">
      <Button
        size="lg"
        className="px-5 py-3"
        style={{ backgroundColor: '#EEEEEE', border: 'none',height:"280px",borderRadius:"4%" }}
      >
        <h4 style={{ color: '#0050a0' }}>DOWNLOAD Moneyplant FOR DESKTOP</h4>
        <img src="https://moneyplantfx.com/wp-content/uploads/2024/07/ios-1.png" alt="iOS" className="me-2" />
        <img src="https://moneyplantfx.com/wp-content/uploads/2024/07/window.png" alt="Windows" className="me-2" />
        <img src="https://moneyplantfx.com/wp-content/uploads/2024/07/ubuntu.png" alt="Ubuntu" className="me-2" />
      </Button>

      <Button
        size="lg"
        className="px-5 py-3"
        style={{ backgroundColor: '#EEEEEE', border: 'none',borderRadius:"4%"  }}
      >
        <h4 style={{ color: '#0050a0' }}>DOWNLOAD Moneyplant FOR PHONE</h4>
        <img src="https://moneyplantfx.com/wp-content/uploads/2024/07/play-store.png" alt="Play Store" className="me-2" />
        <img src="https://moneyplantfx.com/wp-content/uploads/2024/07/android.png" alt="Android" className="me-2" />
      </Button>
    </div>
  </Container>
</div>




      
    </>
  );
};

export default Platforms;
