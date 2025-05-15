// src/pages/News.js
import React, { useEffect } from 'react'; // Import useEffect
import { Container, Row, Col, Card,Button } from 'react-bootstrap';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles


// --- Data for Promotions ---
const promoItems = [
  {
    title: "Refer A Friend & Get Rewarded",
    description: "Get up to $150 as reward while you refer the friend.",
    buttonText: "Claim Now",
    link: "#",
    image: "https://moneyplantfx.com/wp-content/uploads/2024/07/refer-friend.png", // Image for logo
    color: "bg-light" // Light background for the card
  },
  {
    title: "75% IB Partnership",
    description: "Earn up to 75% on Spreads charged to your client. The more they trade, the more you earn!",
    buttonText: "Claim Now",
    link: "#",
    image: "https://moneyplantfx.com/wp-content/uploads/2024/07/partnership.png", // Image for logo
    color: "bg-light" // Light background for the card
  }
];

const News = () => {
  useEffect(() => {
      AOS.init({
        duration: 1000, // values from 0 to 3000, with step 50ms
        once: false, // whether animation should happen only once - while scrolling down
        });
    // Optional: Refresh AOS on component updates if content changes dynamically
    // AOS.refresh();
  }, []);

  return (
    <div className="py-5 bg-light">
      <Container>
        {/* --- Offers Section --- */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-uppercase" data-aos="fade-down"style={{ color: '#0050a0' }}>Choose From Offers</h2>
        </div>
        <Row className="g-4">
          {promoItems.map((promo, index) => (
            <Col md={6} key={index}>
              <Card
                className={`h-100 shadow-sm border-0`}
                style={{ backgroundColor: '#FFEDE2', padding: '100px' }} // Increased padding for larger card
              >
                <Card.Body className="d-flex flex-column justify-content-center text-center">
                  {/* Logo Image */}
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src={promo.image}
                      alt={promo.title}
                      className="img-fluid"
                      style={{ height: '120px', objectFit: 'contain' }}
                    />
                  </div>
                  <div>
                    <Card.Title className="fw-bold " style={{ color: '#0050a0' }}>{promo.title}</Card.Title>
                    <Card.Text className="fw-semibold" style={{color: "#8a8a8a"}}>
                      {promo.description}
                    </Card.Text>
                  </div>
                  <div className="mt-4">
                    <Button
                      href={promo.link}
                      variant="light"
                      className="squared-pill px-4 py-2"
                      style={{
                        backgroundColor: '#f6732e', // Set the button background color
                        color: 'white', // White text color
                        fontWeight: '600' // Slightly bolder font for the button
                      }}
                    >
                      {promo.buttonText}
                    </Button>
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

export default News;
