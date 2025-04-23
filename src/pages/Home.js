// src/pages/Home.js
import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles
import './Home.css';      // Your custom styles for this page

const Home = () => {
  useEffect(() => {
    // Initialize AOS on component mount
    AOS.init({ duration: 1000, once: true });
  }, []); // Correct empty dependency array

  return (
    // Use a React.Fragment or a div as the top-level element
    <>
      {/* Hero Section */}
      <section
        className="hero-section text-white d-flex align-items-center" // Removed parallax class if CSS handles it
        style={{
          backgroundImage:
            'url(https://moneyplantfx.com/wp-content/uploads/2024/07/moneyplant-bg-1-1536x1093.png)',
          // backgroundAttachment: 'fixed', // Let CSS handle this via .hero-section
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // height: '100vh', // Let CSS handle this via .hero-section
        }}
      >
        <Container className="text-center" data-aos="zoom-in-up">
          <h1 className="display-4 fw-bold">Easy Trade | Easy Money</h1>
          <p className="lead">
            Updates 24*7 on market trends with extensive background data on
            every investment
          </p>
          <div className="d-flex justify-content-center gap-3 mb-3">
            {/* Link these buttons appropriately using React Router's <Link> or an onClick handler */}
            <Button variant="primary" size="lg">
              Open Trading Account
            </Button>
            <Button variant="outline-light" size="lg">
              Learn More
            </Button>
          </div>
          <div className="d-flex justify-content-center gap-2">
            {/* Link these buttons appropriately */}
            <Button variant="light" size="md">
              Login
            </Button>
            <Button variant="light" size="md">
              Sign Up
            </Button>
          </div>
        </Container>
      </section>

      {/* Animated Finger Section */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="align-items-center">
            <Col md={6} data-aos="fade-up-right">
              <img
                src="https://moneyplantfx.com/wp-content/uploads/2024/07/index-finger-touching-purple-arrow-1536x910.jpg"
                alt="Tap into Trading"
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col md={6} data-aos="fade-up-left">
              <h2 className="fw-bold text-primary mb-3">Tap Into Smart Trading</h2>
              <p className="text-muted">
                Discover cutting-edge tools and real-time data that keeps you
                ahead of the market.
              </p>
              <Button variant="primary" size="lg">
                Get Started
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section py-5 bg-light">
        <Container>
          {/* Optional: Add a section title */}
          <h2 className="text-center fw-bold mb-5" data-aos="fade-up">Why Choose Us?</h2>
          <Row className="text-center g-4">
            {/* Feature Cards - Content is directly from moneyplantfx */}
             <Col md={3} sm={6} data-aos="fade-zoom-in" data-aos-delay={0}>
               <Card className="shadow-sm border-0"> {/* Removed h-100 if CSS handles height */}
                 <Card.Body>
                   <img src="https://moneyplantfx.com/wp-content/uploads/2024/07/ic1.png" alt="Lowest Spreads" className="mb-3" style={{ height: '50px' }} /> {/* Adjusted inline style */}
                   <Card.Title className="fw-bold">Lowest Spreads</Card.Title>
                   <Card.Text className="text-muted">Lowest spreads (0.0 pips per EUR/USD).[1]</Card.Text>
                 </Card.Body>
               </Card>
             </Col>
             <Col md={3} sm={6} data-aos="fade-zoom-in" data-aos-delay={200}>
               <Card className="shadow-sm border-0">
                 <Card.Body>
                   <img src="https://moneyplantfx.com/wp-content/uploads/2024/07/ic2.png" alt="Balanced Approach" className="mb-3" style={{ height: '50px' }} />
                   <Card.Title className="fw-bold">Balanced Approach</Card.Title>
                   <Card.Text className="text-muted">Network of major global banks and financial institutions for fund safety.[1]</Card.Text>
                 </Card.Body>
               </Card>
             </Col>
             <Col md={3} sm={6} data-aos="fade-zoom-in" data-aos-delay={400}>
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <img src="https://moneyplantfx.com/wp-content/uploads/2024/07/ic3.png" alt="Advanced Trading Analytics" className="mb-3" style={{ height: '50px' }} />
                  <Card.Title className="fw-bold">Advanced Trading Analytics</Card.Title>
                  <Card.Text className="text-muted">Advanced trading analytics with MT5.[1]</Card.Text>
                </Card.Body>
              </Card>
            </Col>
             <Col md={3} sm={6} data-aos="fade-zoom-in" data-aos-delay={600}>
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <img src="https://moneyplantfx.com/wp-content/uploads/2024/07/ic4.png" alt="Transparency" className="mb-3" style={{ height: '50px' }} />
                  <Card.Title className="fw-bold">Transparency</Card.Title>
                  <Card.Text className="text-muted">Transparency in our model.[1]</Card.Text>
                </Card.Body>
              </Card>
            </Col>
             <Col md={3} sm={6} data-aos="fade-zoom-in" data-aos-delay={800}>
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <img src="https://moneyplantfx.com/wp-content/uploads/2024/07/ic5.png" alt="Diverse Investment Portfolio" className="mb-3" style={{ height: '50px' }} />
                  <Card.Title className="fw-bold">Diverse Investment Portfolio</Card.Title>
                  <Card.Text className="text-muted">Diverse portfolio including crypto, Forex, indices, metals, and equities.[1]</Card.Text>
                </Card.Body>
              </Card>
            </Col>
             <Col md={3} sm={6} data-aos="fade-zoom-in" data-aos-delay={1000}>
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <img src="https://moneyplantfx.com/wp-content/uploads/2024/07/ic6.png" alt="Invest Easy" className="mb-3" style={{ height: '50px' }} />
                  <Card.Title className="fw-bold">Invest Easy</Card.Title>
                  <Card.Text className="text-muted">Easy registration in 5 minutes and fast online transactions.[1]</Card.Text>
                </Card.Body>
              </Card>
            </Col>
             <Col md={3} sm={6} data-aos="fade-zoom-in" data-aos-delay={1200}>
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <img src="https://moneyplantfx.com/wp-content/uploads/2024/07/ic7.png" alt="0% commission and charges" className="mb-3" style={{ height: '50px' }} />
                  <Card.Title className="fw-bold">0% commission and charges</Card.Title>
                  <Card.Text className="text-muted">0% commission on deposits with minimal to zero commission for traders.[1]</Card.Text>
                </Card.Body>
              </Card>
            </Col>
             <Col md={3} sm={6} data-aos="fade-zoom-in" data-aos-delay={1400}>
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <img src="https://moneyplantfx.com/wp-content/uploads/2024/07/ic8.png" alt="Multilingual Support" className="mb-3" style={{ height: '50px' }} />
                  <Card.Title className="fw-bold">Multilingual Support</Card.Title>
                  <Card.Text className="text-muted">Multilingual 24/7 customer support.[1]</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Chart Section with Parallax */}
      <section
        className="parallax-section text-white d-flex align-items-center" // Use a specific class if needed for CSS
        style={{
          // Let CSS handle background, height, etc.
          // backgroundAttachment: 'fixed',
          // backgroundSize: 'cover',
          // backgroundPosition: 'center',
          // height: '50vh',
          backgroundColor: '#343a40', // Fallback/base color
          // Consider adding a background image URL here or in CSS
          // backgroundImage: 'url(path/to/your/chart-bg.jpg)',
        }}
      >
        <Container data-aos="fade-up">
          <h2 className="display-6 fw-bold text-center">
            Stay Ahead With Real-Time Market Data
          </h2>
        </Container>
      </section>

      {/* Detailed Feature: Advanced Trading Analytics */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="align-items-center">
            <Col md={6} data-aos="flip-left" className="text-center text-md-start">
              <img
                src="https://moneyplantfx.com/wp-content/uploads/2024/07/ic3.png"
                alt="Advanced Analytics Icon"
                className="img-fluid rounded shadow mb-3 mb-md-0"
                style={{ maxWidth: '150px'}}
              />
            </Col>
            <Col md={6} data-aos="flip-right">
              <h3 className="fw-bold mb-3">
                Advanced Trading Analytics with MT5
              </h3>
              <p className="text-muted">
                Make informed decisions using advanced trading analytics available
                on the MT5 platform.[1] Leverage sophisticated tools for deeper market insights.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Detailed Feature: Lowest Spreads */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center flex-row-reverse"> {/* Reverse order */}
             <Col md={6} data-aos="flip-right" className="text-center text-md-start">
              <img
                src="https://moneyplantfx.com/wp-content/uploads/2024/07/ic1.png"
                alt="Lowest Spreads Icon"
                className="img-fluid rounded shadow mb-3 mb-md-0"
                 style={{ maxWidth: '150px'}}
              />
            </Col>
            <Col md={6} data-aos="flip-left">
              <h3 className="fw-bold mb-3">Lowest Spreads, Highest Returns</h3>
              <p className="text-muted">
                Trade with the lowest spreads (starting from 0.0 pips per EUR/USD) for higher
                profits and better trading efficiency.[1] Maximize your potential gains.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Detailed Feature: Diverse Investment Portfolio */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="align-items-center">
             <Col md={6} data-aos="flip-left" className="text-center text-md-start">
              <img
                src="https://moneyplantfx.com/wp-content/uploads/2024/07/ic5.png"
                alt="Diverse Portfolio Icon"
                className="img-fluid rounded shadow mb-3 mb-md-0"
                 style={{ maxWidth: '150px'}}
              />
            </Col>
            <Col md={6} data-aos="flip-right">
              <h3 className="fw-bold mb-3">Diverse Investment Portfolio</h3>
              <p className="text-muted">
                Access a wide range of markets from a single platform. Trade crypto, Forex,
                indices, metals, energies, and equities to diversify your strategy.[1]
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Platforms Section - ADDED 'platforms-section' CLASS */}
      <section className="platforms-section py-5 bg-light"> {/* Added className */}
        <Container>
          <h2 className="text-center fw-bold mb-5" data-aos="zoom-in-up">
            Available on All Major Platforms
          </h2>
          <Row className="text-center justify-content-center align-items-center g-4">
            {[
              { name: 'WebTrader', img: 'https://moneyplantfx.com/wp-content/uploads/2024/07/leptop.png'},
              { name: 'iOS', img: 'https://moneyplantfx.com/wp-content/uploads/2024/07/ios.png'},
              { name: 'Android', img: 'https://moneyplantfx.com/wp-content/uploads/2024/07/android.png'},
               { name: 'Windows', img: 'https://moneyplantfx.com/wp-content/uploads/2024/07/window.png'},
               { name: 'Play Store', img: 'https://moneyplantfx.com/wp-content/uploads/2024/07/play-store.png'},
            ].map((platform, idx) => (
              <Col
                xs={6}
                sm={4}
                md={2}
                key={platform.name}
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
                className="d-flex flex-column align-items-center"
              >
                <img
                  src={platform.img}
                  alt={platform.name}
                  className="img-fluid mb-2"
                  // style={{ maxHeight: '50px' }} // Let CSS handle this
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section
        className="bg-primary text-white text-center py-5"
        data-aos="zoom-in"
      >
        <Container>
          <h2 className="h3 fw-semibold mb-3">
            Start Your Forex Journey With MoneyPlantFX
          </h2>
          <p className="mb-4 lead"> {/* Let CSS handle max-width */}
            Sign up now and get started with a trusted trading partner.
            Enjoy easy registration in under 5 minutes and benefit from fast online transactions.[1]
          </p>
          {/* Use React Router's Link component for internal navigation if setup */}
          <Button
            href="/accounts" // Or use <Link to="/accounts">
            variant="light"
            size="lg"
            className="rounded-pill px-4 fw-bold" // Let CSS handle specific styles
          >
            Open a Live Account
          </Button>
        </Container>
      </section>

      {/* Scroll to Top Button - ADDED 'scroll-to-top-btn' CLASS */}
      {/* Removed inline styles handled by CSS */}
      <Button
        variant="primary"
        className="scroll-to-top-btn position-fixed shadow" // Added className, kept position/shadow base
        style={{ zIndex: 1030 }} // Keep zIndex inline for certainty
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        {/* SVG Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
        </svg>
      </Button>
    </> // Close React.Fragment
  );
};

export default Home;