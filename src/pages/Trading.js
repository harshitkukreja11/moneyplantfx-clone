// src/pages/Platforms.js
import React, { useEffect } from 'react'; // Import useEffect
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles


const Trading = () => {
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
          COPY TRADING
          </h1>
          <p className=" mb-1 fs-6" style={{color: "#8a8a8a"}}>
            Moneyplant has a unique feature of Copy Trading. This allows traders with less experience to track movements of other traders and replicate them. One does not need to spend hours studying the market and managing their portfolio, they can simply borrow the research from industry masters.
          </p>
      
        </Container>
      </div>

      {/* Download Section */}
<div className="py-1 d-flex justify-content-center flex-wrap gap-4 mt-1">
  <Container className="text-center d-flex flex-column align-items-center justify-content-center"
    style={{
      backgroundColor: '#EEEEEE',
      border: 'none',
      height: '280px',
      borderRadius: '4%',
      width: '550px',
    }}>
    <img src="https://moneyplantfx.com/wp-content/uploads/2024/07/earnby-copying.png" alt="copying1" className="mb-3" style={{height:"90px"}}/>
    <p className="text-muted fw-semibold fs-4">Earn by copying the success <br></br> of pro traders</p>
  </Container>

  <Container className="text-center d-flex flex-column align-items-center justify-content-center"
    style={{
      backgroundColor: '#EEEEEE',
      border: 'none',
      height: '280px',
      borderRadius: '4%',
      width: '550px',
    }}>
    <img src="https://moneyplantfx.com/wp-content/uploads/2024/07/goodat-trading.png" alt="copying2" className="mb-3" style={{height:"90px"}} />
    <p className="text-muted fw-semibold fs-4">Good at trading? Earn from letting others <br></br> copy you!</p>
  </Container>



    {/* Features Section */}
<div className="py-4">
  <Container>
    <Row className="g-4 justify-content-center">
      {[
        {
          description: 'Create an account and make a deposit',
          description1:
            'Sign up in one easy step and make a deposit to your Wallet via any payment method you like.',
          image: 'https://moneyplantfx.com/wp-content/uploads/2024/07/create-account.png',
        },
        {
          description: 'Follow the best traders',
          description1:
            'Select the Masters you want to follow and click Copy. Their positions will be copied automatically.',
          image: 'https://moneyplantfx.com/wp-content/uploads/2024/07/follow-best.png',
        },
        {
          description: 'Monitor and profit!',
          description1:
            'Having unlimited Masters to copy will help you establish a balanced, diversified portfolio of trades and ensure a steady income. Control portfolio, modify and stop trading at any given time.',
          image: 'https://moneyplantfx.com/wp-content/uploads/2024/07/monitor-profit.png',
        },
      ].map((p, i) => (
        <Col key={i} md={6} lg={4}>
          <div className="text-center px-3 h-100 d-flex flex-column align-items-center">
            <img
              src={p.image}
              alt={`feature-${i}`}
              style={{ width: '80px', height: '80px', marginBottom: '20px' }}
            />
            <h5 className="fw-semibold" style={{ color: '#0050a0' }}>
              {p.description}
            </h5>
            <p className="text-muted">{p.description1}</p>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
</div>



</div>




      
    </>
  );
};

export default Trading;
