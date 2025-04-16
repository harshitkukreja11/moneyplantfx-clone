// src/pages/Home.js
import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  },);

  return (
    <div className="min-vh-100">
      {/* Hero Section */}
      <section
        className="hero-section text-white d-flex align-items-center parallax"
        style={{
          backgroundImage:
            'url(https://moneyplantfx.com/wp-content/uploads/2024/07/moneyplant-bg-1-1536x1093.png)',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
        }}
      >
        <Container className="text-center" data-aos="zoom-in-up">
          <h1 className="display-4 fw-bold">Easy Trade | Easy Money</h1>
          <p className="lead">
            Updates 24*7 on market trends with extensive background data on
            every investment
          </p>
          <div className="d-flex justify-content-center gap-3 mb-3">
            <Button variant="primary" size="lg">
              Open Trading Account
            </Button>
            <Button variant="outline-light" size="lg">
              Learn More
            </Button>
          </div>
          <div className="d-flex justify-content-center gap-2">
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
                alt="Hero Image"
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
          <Row className="text-center g-4">
            <Col md={3} sm={6} data-aos="fade-zoom-in" data-aos-delay={0}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <img
                    src="https://moneyplantfx.com/wp-content/uploads/2024/07/ic1.png"
                    alt="Lowest Spreads"
                    className="mb-3"
                    style={{ height: '60px' }}
                  />
                  <Card.Title className="fw-bold">Lowest Spreads</Card.Title>
                  <Card.Text className="text-muted">
                    Lowest spreads (0.0 pips per EUR/USD).[1]
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} data-aos="fade-zoom-in" data-aos-delay={200}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <img
                    src="https://moneyplantfx.com/wp-content/uploads/2024/07/ic2.png"
                    alt="Balanced Approach"
                    className="mb-3"
                    style={{ height: '60px' }}
                  />
                  <Card.Title className="fw-bold">Balanced Approach</Card.Title>
                  <Card.Text className="text-muted">
                    Network of major global banks and financial institutions for
                    fund safety.[1]
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} data-aos="fade-zoom-in" data-aos-delay={400}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <img
                    src="https://moneyplantfx.com/wp-content/uploads/2024/07/ic3.png"
                    alt="Advanced Trading Analytics"
                    className="mb-3"
                    style={{ height: '60px' }}
                  />
                  <Card.Title className="fw-bold">
                    Advanced Trading Analytics
                  </Card.Title>
                  <Card.Text className="text-muted">
                    Advanced trading analytics with MT5.[1]
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} data-aos="fade-zoom-in" data-aos-delay={600}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <img
                    src="https://moneyplantfx.com/wp-content/uploads/2024/07/ic4.png"
                    alt="Transparency"
                    className="mb-3"
                    style={{ height: '60px' }}
                  />
                  <Card.Title className="fw-bold">Transparency</Card.Title>
                  <Card.Text className="text-muted">
                    Transparency in our model.[1]
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} data-aos="fade-zoom-in" data-aos-delay={800}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <img
                    src="https://moneyplantfx.com/wp-content/uploads/2024/07/ic5.png"
                    alt="Diverse Investment Portfolio"
                    className="mb-3"
                    style={{ height: '60px' }}
                  />
                  <Card.Title className="fw-bold">
                    Diverse Investment Portfolio
                  </Card.Title>
                  <Card.Text className="text-muted">
                    Diverse portfolio including crypto, Forex, indices, metals,
                    and equities.[1]
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} data-aos="fade-zoom-in" data-aos-delay={1000}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <img
                    src="https://moneyplantfx.com/wp-content/uploads/2024/07/ic6.png"
                    alt="Invest Easy"
                    className="mb-3"
                    style={{ height: '60px' }}
                  />
                  <Card.Title className="fw-bold">Invest Easy</Card.Title>
                  <Card.Text className="text-muted">
                    Easy registration in 5 minutes and fast online transactions
                  .[1]
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} data-aos="fade-zoom-in" data-aos-delay={1200}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <img
                    src="https://moneyplantfx.com/wp-content/uploads/2024/07/ic7.png"
                    alt="0% commission and charges"
                    className="mb-3"
                    style={{ height: '60px' }}
                  />
                  <Card.Title className="fw-bold">
                    0% commission and charges
                  </Card.Title>
                  <Card.Text className="text-muted">
                    0% commission on deposits with minimal to zero commission for
                    traders.[1]
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} data-aos="fade-zoom-in" data-aos-delay={1400}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <img
                    src="https://moneyplantfx.com/wp-content/uploads/2024/07/ic8.png"
                    alt="Multilingual Support"
                    className="mb-3"
                    style={{ height: '60px' }}
                  />
                  <Card.Title className="fw-bold">
                    Multilingual Support
                  </Card.Title>
                  <Card.Text className="text-muted">
                    Multilingual 24/7 customer support.[1]
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Chart Section with Parallax */}
      <section
        className="text-white d-flex align-items-center"
        style={{
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          backgroundColor: '#343a40' /* Added a dark background color as the image is removed */
        }}
      >
        <Container data-aos="fade-up">
          <h2 className="display-6 fw-bold text-center">
            Stay Ahead With Real-Time Market Data
          </h2>
        </Container>
      </section>

      {/* Parallax + Fade In Additional Info Section */}
      <section className="py-5 bg-white">
        <Container data-aos="fade-up">
          <Row className="align-items-center">
            <Col md={6} data-aos="flip-left">
              <img
                src="https://moneyplantfx.com/wp-content/uploads/2024/07/ic3.png"
                alt="Advanced Analytics"
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col md={6} data-aos="flip-right">
              <h3 className="fw-bold mb-3">
                Advanced Trading Analytics with MT5
              </h3>
              <p className="text-muted">
                Make informed decisions using advanced trading analytics available
                on the MT5 platform.[1]
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Lowest Spreads Section */}
      <section className="py-5 bg-light">
        <Container data-aos="fade-up">
          <Row className="align-items-center">
            <Col md={6} data-aos="flip-left">
              <img
                src="https://moneyplantfx.com/wp-content/uploads/2024/07/ic1.png"
                alt="Lowest Spreads"
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col md={6} data-aos="flip-right">
              <h3 className="fw-bold mb-3">Lowest Spreads, Highest Returns</h3>
              <p className="text-muted">
                Trade with the lowest spreads (0.0 pips per EUR/USD) for higher
                profits and better efficiency.[1]
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Diverse Investment Portfolio Section */}
      <section className="py-5 bg-white">
        <Container data-aos="fade-up">
          <Row className="align-items-center">
            <Col md={6} data-aos="flip-left">
              <img
                src="https://moneyplantfx.com/wp-content/uploads/2024/07/ic5.png"
                alt="Diverse Investment Portfolio"
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col md={6} data-aos="flip-right">
              <h3 className="fw-bold mb-3">Diverse Investment Portfolio</h3>
              <p className="text-muted">
                Access a diverse investment portfolio including crypto, Forex,
                indices, metals, and equities.[1]
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Platforms Section */}
      <section className="py-5 bg-white">
        <Container>
          <h2 className="text-center fw-bold mb-4" data-aos="zoom-in-up">
            Available on All Major Platforms
          </h2>
          <Row className="text-center g-4">
            {[
              'ios',
              'window',
              'ubuntu',
              'android',
              'play-store',
              'leptop',
            ].map((name, idx) => (
              <Col
                xs={6}
                md={2}
                key={name}
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <img
                  src={`https://moneyplantfx.com/wp-content/uploads/2024/07/${name}.png`}
                  alt={name}
                  className="img-fluid"
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
          <h2 className="h4 fw-semibold mb-3">
            Start Your Forex Journey With MoneyPlantFX
          </h2>
          <p className="mb-3">
            Sign up now and get started with the most trusted trading partner.
            Easy registration in 5 minutes and fast online transactions.[1]
          </p>
          <Button
            href="/accounts"
            variant="light"
            size="lg"
            className="rounded-pill"
          >
            Open an Account
          </Button>
        </Container>
      </section>

      {/* Scroll to Top */}
      <Button
        variant="primary"
        className="position-fixed bottom-0 end-0 m-4 rounded-circle shadow"
        style={{ zIndex: 999 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </Button>
    </div>
  );
};

export default Home;