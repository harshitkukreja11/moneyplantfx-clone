// src/pages/Home.js
import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles
import './Home.css';       // Your custom styles for this page (MAKE SURE .btn-orange IS DEFINED HERE)

// Potential Refactor: Consider moving data for repetitive sections (like features, profit cards)
// into arrays of objects and using .map() to render them.

// Example:
// const featuresData = [ {icon: '...', title: '...', text: '...', delay: 0}, ... ];

const Home = () => {
  useEffect(() => {
    // Initialize AOS on component mount
    // `once: true` prevents animations from repeating on scroll up/down
    AOS.init({ duration: 1000, once: true });
  }, []); // Correct empty dependency array ensures this runs only once

  // Placeholder function for button clicks - NEEDS IMPLEMENTATION
  // Use useNavigate() from react-router-dom or other methods for navigation/actions.
  const handleButtonClick = (action) => {
    console.log(`${action} button clicked! Implement navigation or action here.`);
    // Example navigation (requires setup with React Router):
    // navigate('/login');
    // Example alert:
    // alert(`${action} button clicked!`);
  };


  return (
    // Use a React.Fragment to avoid adding an extra node to the DOM
    <>
    
      
     {/* Hero Section - Updated with Video Background */}
     <section className="hero-section d-flex align-items-center text-white py-5"> {/* Removed bg-primary if video covers all */}

{/* Background Video Iframe */}
<iframe
    className="hero-background-video" // Class for CSS targeting
    src={"https://player.vimeo.com/video/980575359?muted=1&autoplay=1&loop=1&background=1&app_id=122963"}
    title="Abstract background video" // Accessibility title
    frameBorder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
></iframe>
        <Container>
          <Row className="align-items-center gy-4"> {/* Added gy-4 for vertical gap on small screens */}
            {/* Text & Buttons - Left Side */}
            <Col md={6} data-aos="fade-right" className="text-center text-md-start">
              <h1 className="display-4 fw-bold">Easy Trade | Easy Money</h1>
              <p className="lead">
                Updates 24*7 on market trends with extensive background data on every investment
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-md-start mt-4"> {/* Increased mt */}
                <Button
                  variant="light" // Base Bootstrap style
                  size="lg"       // Larger button
                  className="fw-bold" // Bootstrap utility
                  onClick={() => handleButtonClick('Login')}
                >
                  Login
                </Button>
                <Button
                  variant="outline-light" // Base Bootstrap style
                  size="lg"               // Larger button
                  className="fw-bold"     // Bootstrap utility
                  onClick={() => handleButtonClick('Sign Up')}
                >
                  Sign Up
                </Button>
              </div>
            </Col>

            {/* Image - Right Side */}
            <Col md={6} data-aos="fade-left" className="text-center">
              <img
                src="https://moneyplantfx.com/wp-content/uploads/2024/07/moneyplant-bg-1-1536x1093.png"
                alt="MoneyPlantFX platform interface example" // Slightly more descriptive alt text
                className="img-fluid rounded shadow-lg" // Added shadow-lg
                style={{ maxHeight: '400px' }} // Inline style acceptable for unique constraint
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Feature Section: YOU TRADE IT. WE HAVE IT. #1 */}
      {/* Consider moving common section styles (like py-5, bg-light) to CSS classes */}
      <section className="py-5 bg-light text-center">
        <Container>
          {/* Main Heading */}
          <h2 className="fw-bold text-primary mb-5" data-aos="fade-up" color='blue'>YOU TRADE IT. WE HAVE IT.</h2>

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
     {/* REFACTOR OPPORTUNITY: Map over an array of feature data */}
     <section className="features-section py-5 bg-white"> {/* Changed background for contrast */}
        <Container>
       
          <Row className="text-center g-4">
          <h2 className="fw-bold text-primary mb-5" data-aos="fade-up">YOU TRADE IT. WE HAVE IT.</h2>
             {/* Note: The [1] likely refers to footnotes on the original site. Decide how to handle or remove. */}
             {/* Feature Card 1 */}
            <Col md={3} sm={6} data-aos="fade-up" data-aos-delay={0}>
                <Card className="shadow-sm border-0 h-100">
                  <Card.Body className="d-flex flex-column p-4"> {/* Added padding */}
                    <img src="https://moneyplantfx.com/wp-content/uploads/2024/07/ic1.png" alt="Lowest Spreads Icon" className="mb-3 align-self-center" style={{ height: '50px', width: 'auto' }} />
                    <Card.Title className="fw-bold mt-auto h5">Lowest Spreads</Card.Title> {/* Used h5 for better hierarchy */}
                    {/* Consider removing [1] or implementing footnotes/tooltips */}
                    <Card.Text className="text-muted small">Lowest spreads (0.0 pips per EUR/USD).[1]</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
             {/* Feature Card 2 */}
              <Col md={3} sm={6} data-aos="fade-up" data-aos-delay={100}>
                <Card className="shadow-sm border-0 h-100">
                  <Card.Body className="d-flex flex-column p-4">
                    <img src="https://moneyplantfx.com/wp-content/uploads/2024/07/ic2.png" alt="Fund Safety Icon" className="mb-3 align-self-center" style={{ height: '50px', width: 'auto' }} />
                    <Card.Title className="fw-bold mt-auto h5">Balanced Approach</Card.Title>
                    <Card.Text className="text-muted small">Network of major global banks and financial institutions for fund safety.[1]</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            {/* Feature Card 3 */}
              <Col md={3} sm={6} data-aos="fade-up" data-aos-delay={200}>
                 <Card className="shadow-sm border-0 h-100">
                   <Card.Body className="d-flex flex-column p-4">
                     <img src="https://moneyplantfx.com/wp-content/uploads/2024/07/ic3.png" alt="Trading Analytics Icon" className="mb-3 align-self-center" style={{ height: '50px', width: 'auto' }} />
                     <Card.Title className="fw-bold mt-auto h5">Advanced Trading Analytics</Card.Title>
                     <Card.Text className="text-muted small">Advanced trading analytics with MT5.[1]</Card.Text>
                   </Card.Body>
                 </Card>
               </Col>
            {/* Feature Card 4 */}
               <Col md={3} sm={6} data-aos="fade-up" data-aos-delay={300}>
                 <Card className="shadow-sm border-0 h-100">
                   <Card.Body className="d-flex flex-column p-4">
                     <img src="https://moneyplantfx.com/wp-content/uploads/2024/07/ic4.png" alt="Transparency Icon" className="mb-3 align-self-center" style={{ height: '50px', width: 'auto' }} />
                     <Card.Title className="fw-bold mt-auto h5">Transparency</Card.Title>
                     <Card.Text className="text-muted small">Transparency in our model.[1]</Card.Text>
                   </Card.Body>
                 </Card>
               </Col>
            {/* Feature Card 5 */}
               <Col md={3} sm={6} data-aos="fade-up" data-aos-delay={400}>
                 <Card className="shadow-sm border-0 h-100">
                   <Card.Body className="d-flex flex-column p-4">
                     <img src="https://moneyplantfx.com/wp-content/uploads/2024/07/ic5.png" alt="Portfolio Icon" className="mb-3 align-self-center" style={{ height: '50px', width: 'auto' }} />
                     <Card.Title className="fw-bold mt-auto h5">Diverse Investment Portfolio</Card.Title>
                     <Card.Text className="text-muted small">Diverse portfolio including crypto, Forex, indices, metals, and equities.[1]</Card.Text>
                   </Card.Body>
                 </Card>
               </Col>
            {/* Feature Card 6 */}
               <Col md={3} sm={6} data-aos="fade-up" data-aos-delay={500}>
                 <Card className="shadow-sm border-0 h-100">
                   <Card.Body className="d-flex flex-column p-4">
                     <img src="https://moneyplantfx.com/wp-content/uploads/2024/07/ic6.png" alt="Easy Investment Icon" className="mb-3 align-self-center" style={{ height: '50px', width: 'auto' }} />
                     <Card.Title className="fw-bold mt-auto h5">Invest Easy</Card.Title>
                     <Card.Text className="text-muted small">Easy registration in 5 minutes and fast online transactions.[1]</Card.Text>
                   </Card.Body>
                 </Card>
               </Col>
            {/* Feature Card 7 */}
               <Col md={3} sm={6} data-aos="fade-up" data-aos-delay={600}>
                 <Card className="shadow-sm border-0 h-100">
                   <Card.Body className="d-flex flex-column p-4">
                     <img src="https://moneyplantfx.com/wp-content/uploads/2024/07/ic7.png" alt="Zero Commission Icon" className="mb-3 align-self-center" style={{ height: '50px', width: 'auto' }} />
                     <Card.Title className="fw-bold mt-auto h5">0% commission and charges</Card.Title>
                     <Card.Text className="text-muted small">0% commission on deposits with minimal to zero commission for traders.[1]</Card.Text>
                   </Card.Body>
                 </Card>
               </Col>
            {/* Feature Card 8 */}
               <Col md={3} sm={6} data-aos="fade-up" data-aos-delay={700}>
                 <Card className="shadow-sm border-0 h-100">
                   <Card.Body className="d-flex flex-column p-4">
                     <img src="https://moneyplantfx.com/wp-content/uploads/2024/07/ic8.png" alt="Support Icon" className="mb-3 align-self-center" style={{ height: '50px', width: 'auto' }} />
                     <Card.Title className="fw-bold mt-auto h5">Multilingual Support</Card.Title>
                     <Card.Text className="text-muted small">Multilingual 24/7 customer support.[1]</Card.Text>
                   </Card.Body>
                 </Card>
               </Col>
          </Row>
        </Container>
      </section>

      {/* Animated Finger Section - Consider CSS class for background */}
      <section className="py-5 text-white" style={{ backgroundColor: '#0056b3' }}>
        <Container>
          <Row className="align-items-center gy-4"> {/* Added gy-4 */}
            {/* Text on Left */}
            <Col md={6} className="mb-4 mb-md-0" data-aos="fade-right">
              <h2 className="fw-bold mb-4">ENTER THE FUTURE OF INVESTING!</h2>
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
                  style={{ width: '70px', height: '70px', marginRight: '15px', borderRadius: '50%', objectFit: 'cover' }}
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
                   style={{ width: '70px', height: '70px', marginRight: '15px', borderRadius: '50%', objectFit: 'cover' }}
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
                   style={{ width: '70px', height: '70px', marginRight: '15px', borderRadius: '50%', objectFit: 'cover' }}
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
                  {/* Wallet Option 2 */}
                  <div className="mb-4 flex-grow-1 d-flex flex-column align-items-center">
                    <img src="https://moneyplantfx.com/wp-content/uploads/2024/08/star.png" alt="Standard Wallet Tier" style={{ width: '50px' }} />
                    <p className="mt-2 mb-0 fw-bold">STANDARD</p>
                    <small className="text-muted">$10000 /Equivalent</small>
                  </div>
                   {/* Wallet Option 3 */}
                  <div className="flex-grow-1 d-flex flex-column align-items-center">
                    <img src="https://moneyplantfx.com/wp-content/uploads/2024/08/star.png" alt="Premium Wallet Tier" style={{ width: '50px' }} />
                    <p className="mt-2 mb-0 fw-bold">PREMIUM</p>
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
          <h2 className="fw-bold mb-3">BIGGER PORTFOLIO & BIGGER RETURNS</h2>
           {/* Using lead class enhances readability for these paragraphs */}
          <p className="lead mb-3 mx-auto" style={{ maxWidth: '800px' }}>
            Now buy from a diverse range of financial products, from crypto to currency, oils to metal, we wouldn’t let you miss any opportunities!
          </p>
          <p className="lead mb-3 mx-auto" style={{ maxWidth: '800px' }}>
            Our model is designed to help you accumulate wealth over time and make the best of market opportunities.
          </p>
          <p className="lead mx-auto" style={{ maxWidth: '800px' }}>
            You can trade anytime and anywhere by downloading our software on all these platforms.
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
                      style={{ maxHeight: '40px' }} // Consistent logo height
                    />
                    {/* Optional: Add platform name text below icon */}
                    {/* <span className="small text-muted">{platform.name}</span> */}
                  </Col>
                ))}
              </Row>
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
          <h2 className="fw-bold" data-aos="fade-up">JUST 4 STEPS AWAY</h2>
          <h4 className="fw-semibold mb-4 text-secondary" data-aos="fade-up" data-aos-delay="100">FROM YOUR DREAM INVESTMENTS</h4>

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
      {/* Consider CSS class for background */}
      <section className="py-5" style={{ backgroundColor: '#0056b3' }}>
        <Container className="text-center">
          <h3 className="text-white fw-bold mb-4" data-aos="fade-up">Secure & Convenient Payments</h3>
          <div className="mt-4" data-aos="zoom-in">
            <img
              src="https://corlin.in/wp-content/uploads/2024/05/Payment.png"
              alt="Payment Methods Accepted: Visa, Mastercard, Neteller, Skrill, Bitcoin, Ethereum, Tether" // Excellent descriptive alt
              className="img-fluid rounded" // Added rounded
              // Added white background and padding for better visibility of logos against the dark section background
              style={{
                maxWidth: '100%',
                padding: '15px', // Add some padding around the logos
                backgroundColor: 'white',
                borderRadius: '8px' // Match rounded class
              }}
            />
          </div>
        </Container>
      </section>

      {/* License Section */}
      <section className="py-5 bg-light"> {/* Added bg-light */}
        <Container>
          <Row className="align-items-center gy-4"> {/* Added gy-4 for vertical gap */}
            {/* Text Section */}
            <Col md={6} data-aos="fade-right">
              <h2 className="fw-bold mb-3">Our License</h2>
              <p className="mb-4 lead"> {/* Using lead class */}
                Our company is authorized and regulated by the Mwali International Services Authority (“MISA”) of Island of Mwali (Moheli), Comoros Union, with license number: <strong>BFX2024047</strong>.
              </p>

              {/* Buttons */}
               {/* Consider making these links (<a> tags styled as buttons) if they navigate */}
              <div className="d-flex flex-wrap gap-3">
                <Button variant="primary" size="lg" onClick={() => handleButtonClick('Download License')}>DOWNLOAD</Button>
                 {/* Changed middle button to outline for visual hierarchy */}
                <Button variant="outline-primary" size="lg" onClick={() => handleButtonClick('Lookup License')}>LOOKUP</Button>
                <Button variant="success" size="lg" onClick={() => handleButtonClick('Verify License')}>VERIFY</Button>
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