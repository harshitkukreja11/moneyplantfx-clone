// src/pages/Home.js
import React, { useEffect } from 'react';
import { Container, Button,Col,Card,Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
import LogoCarousel from '../components/LogoCarousel';

const Home = () => {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({ duration: 1000, once: true });

    // Inject TradingView Ticker Tape widget
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FOREXCOM:SPXUSD", title: "S&P 500 Index" },
        { proName: "FOREXCOM:NSXUSD", title: "US 100 Cash CFD" },
        { proName: "FX_IDC:EURUSD", title: "EUR to USD" },
        { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
        { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
        { proName: "BINANCE:BTCUSDT" },
        { proName: "BINANCE:ETHUSDT" },
        { proName: "COINBASE:ETHUSD" },
        { proName: "CRYPTOCAP:TOTAL" },
        { proName: "CRYPTOCAP:OTHERS" },
        { proName: "COINBASE:DOGJ2025" }
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "regular",
      colorTheme: "light",
      width: "100%",
      height: 46
    });
    const container = document.getElementById("ticker-tape-container");
    if (container && !container.querySelector("script")) {
      container.appendChild(script);
    }
    
  }, []);
  const featuresData = [
    {
      title: 'Lowest Spreads',
      text: 'MoneyPlant is committed to your wealth creation, we offer the lowest spreads in the industry with 0.0 pips per EUR/USD.',
      img: 'https://moneyplantfx.com/wp-content/uploads/2024/07/ic1.png',
      alt: 'Lowest Spreads Icon',
    },
    {
      title: 'Balanced Approach',
      text: 'With our network with Major Global banks and financial institutions your money safe and segregated for a balanced and protected future.',
      img: 'https://moneyplantfx.com/wp-content/uploads/2024/07/ic2.png',
      alt: 'Fund Safety Icon',
    },
    {
      title: 'Advanced Trading Analytics',
      text: 'With MT5 analyzing the market like never before, our analytics and reports are here to keep a track of all your investments.',
      img: 'https://moneyplantfx.com/wp-content/uploads/2024/07/ic3.png',
      alt: 'Trading Analytics Icon',
    },
    {
      title: 'Transparency',
      text: 'You believe in us and we believe in transparency. Our model is 100% transparent and build to deliver the best to all our traders.',
      img: 'https://moneyplantfx.com/wp-content/uploads/2024/07/ic4.png',
      alt: 'Transparency Icon',
    },
    {
      title: 'Diverse Investment Portfolio',
      text: 'Now with a single trading account invest in all types of financial products, Crypto, Forex, Indices, Metal, Equity and more- Build an unbeatable investment portfolio with MoneyPlant',
      img: 'https://moneyplantfx.com/wp-content/uploads/2024/07/ic5.png',
      alt: 'Portfolio Icon',
    },
    {
      title: 'Invest Easy',
      text: 'Register in 5 minutes and experience the fastest transaction online with MoneyPlant. Each financial decision you make is now just a click away from reality.',
      img: 'https://moneyplantfx.com/wp-content/uploads/2024/07/ic6.png',
      alt: 'Easy Investment Icon',
    },
    {
      title: '0% commission and charges',
      text: 'We offer zero deposit money on your funds, with minimal to zero commission to all our traders.',
      img: 'https://moneyplantfx.com/wp-content/uploads/2024/07/ic7.png',
      alt: 'Zero Commission Icon',
    },
    {
      title: 'Multilingual Support',
      text: 'Our 24*7 support is here to guide in your language, make informed financial decisions with our experts and experience the smoothest operations with our customer support.',
      img: 'https://moneyplantfx.com/wp-content/uploads/2024/07/ic8.png',
      alt: 'Support Icon',
    },
  ];
  

  const handleButtonClick = (action) => {
    console.log(`${action} button clicked!`);
  };

  return (
    <>
     

      {/* Hero Section */}
      <section className="hero-section text-white position-relative" style={{ minHeight: '90vh', overflow: 'hidden' }}>
        {/* Background Video */}
        <div className="video-wrapper">
          <iframe
            src="https://player.vimeo.com/video/980575359?muted=1&autoplay=1&loop=1&background=1"
            title="Background Video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="video-iframe"
          ></iframe>
        </div>       
         <Container>
          <Row className="align-items-center gy-4">
            <Col md={6} data-aos="fade-right" className="text-center text-md-start">
              <h1 className="display-4 fw-bold">Easy Trade | Easy Money</h1>
              <p className="lead">
                Updates 24*7 on market trends with extensive background data on every investment
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-md-start mt-4">
                <Button variant="light" size="lg" className="fw-bold" onClick={() => handleButtonClick('Login')}>
                  Login
                </Button>
                <Button variant="outline-light" size="lg" className="fw-bold" onClick={() => handleButtonClick('Sign Up')}>
                  Sign Up
                </Button>
              </div>
            </Col>

            <Col md={6} data-aos="fade-left" className="text-center">
              <img
                src="https://moneyplantfx.com/wp-content/uploads/2024/07/moneyplant-bg-1-1536x1093.png"
                alt="MoneyPlantFX platform interface example"
                className="img-fluid rounded "
                style={{ maxHeight: '400px' }}
              />
            </Col>
          </Row>
        </Container>
      </section>
 {/* TradingView Ticker Tape Widget - Moved Below Hero Section */}
    
      <div id="ticker-tape-container" style={{ width: '100%' }}></div>
      
      {/* Feature Section: YOU TRADE IT. WE HAVE IT. #1 */}
      {/* Consider moving common section styles (like py-5, bg-light) to CSS classes */}
      <section className="py-5 bg-light text-center">
        <Container>
          {/* Main Heading */}
          <h2 className="fw-bold text-primary mb-5" data-aos="fade-up" >YOU TRADE IT. WE HAVE IT.</h2>

          {/* Images + Text Boxes */}
          <Row className="justify-content-center g-4"> {/* Added g-4 for gap */}
            {/* Left Box */}
            <Col xs={12} md={5} className="mb-4 mb-md-0" data-aos="fade-right">
               {/* Using h-100 and d-flex to ensure boxes have same height and content aligns */}
              <div className="border rounded p-4 h-100 d-flex flex-column justify-content-between shadow-sm">
                <img
                  src="https://moneyplantfx.com/wp-content/uploads/2024/07/barrel.png"
                  alt="Barrel representing Forex, Metals, Energies, Indices" // Descriptive alt
                  className="img-fluid mb-3 align-self-center" // Center image
                   // Allow natural width, constrain height. Consider CSS class.
                  style={{ maxHeight: '200px', width:'auto' }}
                />
                <p className="lead m-0">Forex, Metals, Energies, Indices.</p>
              </div>
            </Col>

            {/* Right Box */}
            <Col xs={12} md={5} data-aos="fade-left">
              <div className="border rounded p-4 h-100 d-flex flex-column justify-content-between shadow-sm">
                <img
                  src="https://moneyplantfx.com/wp-content/uploads/2024/07/mobsss.png"
                  alt="Mobile phones showing Copy Trading Software interface" // Descriptive alt
                  className="img-fluid mb-3 align-self-center" // Center image
                  style={{ maxHeight: '200px', width:'auto' }} // Consistent height
                />
                <p className="lead m-0">Copy Trading Software.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

     {/* Features Section (8 Cards) */}
    
  <section className="features-section py-5 bg-white">
    <Container>
      <h2 className="fw-bold text-primary text-center mb-5" data-aos="fade-up">YOU TRADE IT. WE HAVE IT.</h2>
      <Row className="text-center g-4">
        {featuresData.map((feature, index) => (
          <Col key={index} md={3} sm={6} data-aos="fade-up" data-aos-delay={index * 100}>
            <Card className="border-0 h-100">
              <Card.Body className="d-flex flex-column p-4">
                <img src={feature.img} alt={feature.alt} className="mb-3 align-self-center" style={{ height: '122px', width: 'auto' }} />
                <Card.Title className="fw-bold mt-auto h5" style={{
    marginBottom: '6px',
    color: '#FF6600',
    fontFamily: '"Roboto", Sans-serif',
    fontWeight: 400,
  }}>{feature.title}</Card.Title>
                <Card.Text className="text-muted small" style={{fontfamily: '"Roboto", Sans-serif',
    fontweight: "400",
    lineheight: "22px",}}>{feature.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
     
      {/* Animated Finger Section - Consider CSS class for background */}
      <section className="py-5 text-white" style={{ backgroundColor: '#0056b3' }}>
        <Container>
          <Row className="align-items-center gy-4"> {/* Added gy-4 */}
            {/* Text on Left */}
            <Col md={6} className="mb-4 mb-md-0" data-aos="fade-right">
              <h2 className="fw-bold mb-4">ENTER THE FUTURE OF <br></br>INVESTING!</h2>
              {/* Using lead class adds slightly larger font size and line height */}
              <p className="lead">
                Secure your future with Smart Investments. Build a financial portfolio with MoneyPlant
                that you can trust to build you a wealthy future - with the future of investing in the MARKET.
              </p>
              <p className="lead">
                With just one trading account and minimal spreads in industry - encash on best market
                opportunities and financial gains in the crypto market. We ensure immediate execution of
                all your orders so you never miss a market gain or opportunity.
              </p>
            </Col>

            {/* Image on Right */}
            <Col md={6} data-aos="fade-left">
              <img
                src="https://moneyplantfx.com/wp-content/uploads/2024/07/index-finger-touching-purple-arrow-1536x910.jpg"
                alt="Finger touching a glowing upward trend arrow representing future investing" // Descriptive alt
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Fresher to Trading Section */}
      <section className="py-5 bg-light"> {/* Added bg-light */}
        <Container>
          <Row className="align-items-center gy-4"> {/* Added gy-4 */}
            {/* Text and Buttons */}
            <Col md={6} className="mb-4 mb-md-0" data-aos="fade-right">
              <h2 className="fw-bold mb-4">FRESHER TO TRADING?</h2>
              <p className="lead">
                Learn from the best! Our software lets you follow the footsteps of top traders who are
                making most of the market. With Money Plant you can copy their investment decisions and
                advice for maximum returns.
              </p>
              <div className="mt-4 d-flex flex-wrap gap-3"> {/* Use flex-wrap and gap for button spacing */}
                {/* Ensure .btn-orange styles are defined in Home.css */}
                <Button
                  variant="warning" // Base variant (ignored if .btn-orange uses !important)
                  size="lg"
                  className="btn-orange" // Apply custom class
                  onClick={() => handleButtonClick('Start Following')}
                >
                  Start Following
                </Button>
                <Button
                  variant="warning" // Base variant
                  size="lg"
                  className="btn-orange" // Apply custom class
                  onClick={() => handleButtonClick('Start Providing')}
                 >
                  Start Providing
                </Button>
              </div>
            </Col>

            {/* Image on Right */}
            <Col md={6} data-aos="fade-left">
              <img
                src="https://moneyplantfx.com/wp-content/uploads/2024/07/mobile1.png"
                alt="Mobile phone displaying trading charts and interface" // Descriptive alt
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Profit 3 Logos Section */}
       {/* REFACTOR OPPORTUNITY: Map over an array of trader data */}
      <section className="py-5 bg-white"> {/* Contrasting background */}
        <Container>
          <Row className="g-4 justify-content-center"> {/* Center cards if fewer than 3 */}
            {/* Card 1 */}
            <Col md={4} data-aos="zoom-in">
               {/* Using flex utilities for horizontal layout inside card */}
              <Card className="d-flex flex-row align-items-center p-3 shadow-sm border rounded h-100">
                <img
                  src="https://moneyplantfx.com/wp-content/uploads/2024/07/ico-1.png"
                  alt="Vipul Shah Profile"
                  // Consider using CSS classes for common avatar styles
                  style={{ width: '100px', height: '100px', marginRight: '15px', borderradius: "30px, 30px, 30px, 30px"
                    , objectFit: 'cover' }}
                />
                <div>
                  <h5 className="mb-1 fw-bold">Vipul Shah</h5>
                  <p className="mb-0 fw-bold text-success">Profit: 150%</p>
                </div>
              </Card>
            </Col>

            {/* Card 2 */}
            <Col md={4} data-aos="zoom-in" data-aos-delay="100">
              <Card className="d-flex flex-row align-items-center p-3 shadow-sm border rounded h-100">
                <img
                  src="https://moneyplantfx.com/wp-content/uploads/2024/07/ico-2.png"
                  alt="Ben Jaggers Profile"
                   style={{ width: '100px', height: '100px', marginRight: '15px', borderradius: "30px, 30px, 30px, 30px", objectFit: 'cover' }}
                 />
                <div>
                  <h5 className="mb-1 fw-bold">Ben Jaggers</h5>
                  <p className="mb-0 fw-bold text-success">Profit: 120%</p>
                </div>
              </Card>
            </Col>

            {/* Card 3 */}
            <Col md={4} data-aos="zoom-in" data-aos-delay="200">
              <Card className="d-flex flex-row align-items-center p-3 shadow-sm border rounded h-100">
                <img
                  src="https://moneyplantfx.com/wp-content/uploads/2024/07/ico-3.png"
                  alt="Martin Niket Profile"
                   style={{ width: '100px', height: '100px', marginRight: '15px', borderradius: "30px, 30px, 30px, 30px", objectFit: 'cover' }}
                 />
                <div>
                  <h5 className="mb-1 fw-bold">Martin Niket</h5>
                  <p className="mb-0 fw-bold text-success">Profit: 90%</p>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Wallet, Platforms, Extra Profit Section */}
      {/* Consider CSS class for background */}
      <section style={{ backgroundColor: '#0056b3' }} className="py-5">
        <Container>
          <Row className="g-4">

            {/* Card 1 - Wallet Options */}
            <Col md={4} data-aos="fade-up">
              {/* Card styling: remove border, use white background for contrast */}
              <Card className="h-100 text-center p-4 shadow" style={{ border: 'none', backgroundColor: 'white' }}>
                {/* Using d-flex and flex-grow-1 to distribute space evenly */}
                <Card.Body className="d-flex flex-column">
                  <h5 className="fw-bold mb-4">Choose your wallet!</h5>
                   {/* Wallet Option 1 */}
                  <div className="mb-4 flex-grow-1 d-flex flex-column align-items-center">
                    <img src="https://moneyplantfx.com/wp-content/uploads/2024/08/star.png" alt="Basic Wallet Tier" style={{ width: '50px' }} />
                    <p className="mt-2 mb-0 fw-bold">BASIC</p>
                    <small className="text-muted">$1000 /Equivalent</small>
                  </div>
                  {/* Wallet Option 2 - STANDARD */}
<div className="mb-4 flex-grow-1 d-flex flex-column align-items-center">
  <div className="d-flex gap-2">
    <img src="https://moneyplantfx.com/wp-content/uploads/2024/08/star.png" alt="Standard Wallet Tier" style={{ width: '50px' }} />
    <img src="https://moneyplantfx.com/wp-content/uploads/2024/08/star.png" alt="Standard Wallet Tier" style={{ width: '50px' }} />
  </div>
  <p className="mt-2 mb-0" style={{  fontFamily: '"Roboto", Sans-serif', fontWeight: 400 }}>STANDARD</p>
  <small className="text-muted">$10000 /Equivalent</small>
</div>

{/* Wallet Option 3 - PREMIUM */}
<div className="flex-grow-1 d-flex flex-column align-items-center">
  <div className="d-flex gap-2">
    <img src="https://moneyplantfx.com/wp-content/uploads/2024/08/star.png" alt="Premium Wallet Tier" style={{ width: '50px' }} />
    <img src="https://moneyplantfx.com/wp-content/uploads/2024/08/star.png" alt="Premium Wallet Tier" style={{ width: '50px' }} />
    <img src="https://moneyplantfx.com/wp-content/uploads/2024/08/star.png" alt="Premium Wallet Tier" style={{ width: '50px' }} />
  </div>
  <p className="mt-2 mb-0" style={{ fontFamily: '"Roboto", Sans-serif', fontWeight: 400 }}>PREMIUM</p>
  <small className="text-muted">$25000 /Equivalent</small>
</div>

                </Card.Body>
              </Card>
            </Col>

            {/* Card 2 - Trading Platforms */}
            <Col md={4} data-aos="fade-up" data-aos-delay="100">
              <Card className="h-100 text-center p-4 shadow" style={{ border: 'none', backgroundColor: 'white' }}>
                 <Card.Body className="d-flex flex-column">
                  <h5 className="fw-bold mb-4">Powerful Platforms for Sophisticated Traders</h5>
                  {/* Platform 1 */}
                  <div className="mb-4 flex-grow-1 d-flex flex-column align-items-center justify-content-center">
                    <img src="https://moneyplantfx.com/wp-content/uploads/2024/08/mt5.png" alt="MetaTrader 5 Logo" style={{ width: '50px' }} />
                    <p className="mt-2 mb-1 fw-bold">MetaTrader 5</p>
                    <small className="text-muted px-2">
                      Moneyplant MT5 is a powerful trading system you can use to take advantage of any market situation.
                    </small>
                  </div>
                  {/* Availability */}
                  <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
                    <img src="https://moneyplantfx.com/wp-content/uploads/2024/08/available.png" alt="Available Across Devices Logos" style={{ width: '120px' }} />
                    <p className="mt-2 mb-1 fw-bold">Available on</p>
                    <small className="text-muted px-2">Accessible across devices for seamless trading.</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 3 - Extra Profits */}
            <Col md={4} data-aos="fade-up" data-aos-delay="200">
              <Card className="h-100 text-center p-4 shadow" style={{ border: 'none', backgroundColor: 'white' }}>
                 <Card.Body className="d-flex flex-column">
                  <h5 className="fw-bold mb-4">Make Extra Profit from Commission</h5>
                   {/* Profit Point 1 */}
                  <div className="mb-4 flex-grow-1 d-flex flex-column align-items-center">
                    <img src="https://moneyplantfx.com/wp-content/uploads/2024/08/hand.png" alt="Instant Commission Icon" style={{ width: '50px' }} />
                    <p className="mt-2 mb-0 fw-bold">Instant Commission</p>
                    <small className="text-muted">Earn as a professional Money Manager.</small>
                  </div>
                  {/* Profit Point 2 */}
                  <div className="mb-4 flex-grow-1 d-flex flex-column align-items-center">
                    <img src="https://moneyplantfx.com/wp-content/uploads/2024/08/percentages.png" alt="Earn More Icon" style={{ width: '50px' }} />
                    <p className="mt-2 mb-0 fw-bold">Earn More</p>
                    <small className="text-muted">Get more followers and earn profits automatically.</small>
                  </div>
                  {/* Profit Point 3 */}
                  <div className="flex-grow-1 d-flex flex-column align-items-center">
                    <img src="https://moneyplantfx.com/wp-content/uploads/2024/08/people.png" alt="Referral Bonus Icon" style={{ width: '50px' }} />
                    <p className="mt-2 mb-0 fw-bold">Referral Bonus</p>
                    <small className="text-muted">Refer new clients and receive bonuses.</small>
                  </div>
                 </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>
      </section>

      {/* Bigger Portfolio Text Section */}
      {/* Consider CSS class for background */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container className="text-center" data-aos="fade-up">
          <h2 className="fw-bold mb-3" style={{fontfamily: '"Roboto", Sans-serif',
    fontweight: "400",color:"#0050a0"}}>BIGGER PORTFOLIO & BIGGER RETURNS</h2>
           {/* Using lead class enhances readability for these paragraphs */}
          <p className="lead mb-3 mx-auto" style={{ maxWidth: '800px' }}>
            Now buy from a diverse range of financial products, from crypto to currency, oils to metal, we wouldn’t let you miss any opportunities!
          </p>
          <p className="lead mb-3 mx-auto" style={{ maxWidth: '800px' }}>
            Our model is designed to help you accumulate wealth over time and make the best of market opportunities.
          </p>
          <p className="lead mx-auto" style={{ maxWidth: '800px' }}>
            <b>You can trade anytime and anywhere by downloading our software on all these platforms.</b>
          </p>
        </Container>
      </section>

       {/* Platform Availability Logos Section - Placed correctly after the text */}
      <section className="py-4" style={{ backgroundColor: '#f8f9fa' }}> {/* Continued background */}
        <Container>
          {/* Using map for platform logos is good practice */}
          <Row className="text-center justify-content-center align-items-center g-4">
                {[
                  { name: 'iOS', img: 'https://moneyplantfx.com/wp-content/uploads/2024/07/ios.png'},
                  { name: 'Android', img: 'https://moneyplantfx.com/wp-content/uploads/2024/07/android.png'},
                  { name: 'Windows', img: 'https://moneyplantfx.com/wp-content/uploads/2024/07/window.png'},
                  { name: 'Play Store', img: 'https://moneyplantfx.com/wp-content/uploads/2024/07/play-store.png'},
                  // Add Web Platform explicitly if applicable
                  // { name: 'Web', img: 'path/to/web-icon.png'},
                ].map((platform, idx) => (
                  <Col
                    xs={6} // Takes half width on extra small screens
                    sm={4} // Takes 1/3rd width on small screens
                    md={"auto"} // Takes natural width on medium and up, fits content
                    key={platform.name}
                    data-aos="zoom-in"
                    data-aos-delay={idx * 100}
                    className="d-flex flex-column align-items-center platform-logo" // Class for potential CSS targeting
                  >
                    <img
                      src={platform.img}
                      alt={`${platform.name} platform logo`} // More specific alt text
                      className="img-fluid mb-2"
                      style={{ maxHeight: '103px' }} // Consistent logo height
                    />
                    {/* Optional: Add platform name text below icon */}
                    {/* <span className="small text-muted">{platform.name}</span> */}
                  </Col>
                ))}
              </Row>
            
            
            {/* TradingView Forex Cross Rates Widget */}
<div className="tradingview-widget-container" style={{ marginTop: "2rem"}}>
  <iframe
    src="https://www.tradingview-widget.com/embed-widget/forex-cross-rates/#..."
    width="100%"
    height="400"
    frameBorder="0"
    allowTransparency="true"
    scrolling="no"
    title="Forex Cross Rates Widget"
    style={{ border: "none", boxShadow: "0 0 15px rgba(0,0,0,0.1)" }}
  ></iframe>
</div>
        </Container>
      </section>




      {/* JUST 4 STEPS AWAY Section */}
      <section className="py-5 text-center bg-white"> {/* Changed background */}
        <Container>
          {/* Top image */}
          <img
            src="https://moneyplantfx.com/wp-content/uploads/2024/07/leptop.png"
            alt="Laptop showing trading interface"
            className="img-fluid mb-4"
             // Responsive max width: 80% of container, up to 600px max
            style={{ maxWidth: 'min(80%, 600px)' }}
             data-aos="zoom-in-up"
           />

          {/* Text in between */}
          <h2 className="fw-bold" data-aos="fade-up" style={{fontfamily: '"Roboto", Sans-serif',
    fontsize: "45px",
    fontweight: "400",color:"#0050a0"}}>JUST 4 STEPS AWAY</h2>
          <h4 className="fw-bold " data-aos="fade-up" style={{fontfamily: '"Roboto", Sans-serif',
    fontsize: "45px",
    fontweight: "400",color:"#0050a0"}}>FROM YOUR DREAM INVESTMENTS</h4>

          {/* Bottom image */}
          <img
            src="https://moneyplantfx.com/wp-content/uploads/2024/07/chart-1536x366.png"
            alt="4 Steps Chart: Register, Fund, Choose Strategy, Start Trading"
            className="img-fluid mt-3"
            style={{ maxWidth: '100%' }} // Ensure it doesn't overflow container
            data-aos="zoom-in-up" data-aos-delay="200"
          />
        </Container>
      </section>
     

      {/* Payment Methods Section */}
      <div>
        <LogoCarousel />
      </div>
    
      

      {/* License Section */}
      <section className="py-5 bg-light"> {/* Added bg-light */}
        <Container>
          <Row className="align-items-center gy-4"> {/* Added gy-4 for vertical gap */}
            {/* Text Section */}
            <Col md={6} data-aos="fade-right">
              <h2 className="fw-bold mb-3"  style={{fontfamily: '"Roboto", Sans-serif',
    fontsize: "45px",
    fontweight: "400",color:"#0050a0"}}>Our License</h2>
              <p className="mb-4 lead"> {/* Using lead class */}
                Our company is authorized and regulated by the Mwali International Services Authority (“MISA”) of Island of Mwali (Moheli), Comoros Union, with license number:BFX2024047.
              </p>

              {/* Buttons */}
               {/* Consider making these links (<a> tags styled as buttons) if they navigate */}
               <div className="d-flex flex-column align-items-center gap-3 mt-4">
                <Button size="lg" style={{color:"white",backgroundColor:"#0050a0"}} onClick={() => handleButtonClick('Download License')}>DOWNLOAD OUR LICENSE</Button>
                 {/* Changed middle button to outline for visual hierarchy */}
                <Button style={{color:"white",backgroundColor:"#fc6716"}}size="lg" onClick={() => handleButtonClick('Lookup License')}>LOOKUP OUR LICENSE</Button>
                <Button style={{color:"white",backgroundColor:"#0050a0"}} size="lg" onClick={() => handleButtonClick('Verify License')}>VERIFY LICENSE</Button>
              </div>
            </Col>

            {/* Image Section */}
            <Col md={6} className="text-center" data-aos="fade-left">
              {/* VERIFY THIS IMAGE URL: path contains /2025/04/ */}
              <img
                src="https://moneyplantfx.com/wp-content/uploads/2025/04/all-in-1-2-7.png"
                alt="MISA License Document Preview" // More specific alt text
                className="img-fluid rounded shadow" // Added rounded and shadow
                style={{ maxHeight: '350px' }} // Constrain height
              />
            </Col>
          </Row>
        </Container>
      </section>

    </>
  );
};

export default Home;