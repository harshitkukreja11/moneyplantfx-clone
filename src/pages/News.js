// src/pages/News.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

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
  return (
    <div className="py-5 bg-light">
      <Container>
        {/* --- Offers Section --- */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-uppercase text-dark">Choose From Offers</h2>
        </div>
        <Row className="g-4">
          {promoItems.map((promo, index) => (
            <Col md={6} key={index}>
              <Card
                className={`h-100 shadow-sm border-0`}
                style={{ backgroundColor: '#FFEDE2', padding: '30px' }} // Increased padding for larger card
              >
                <Card.Body className="d-flex flex-column justify-content-center text-center">
                  {/* Logo Image */}
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src={promo.image}
                      alt={promo.title}
                      className="img-fluid"
                      style={{ height: '100px', objectFit: 'contain' }}
                    />
                  </div>
                  <div>
                    <Card.Title className="fw-semibold">{promo.title}</Card.Title>
                    <Card.Text className="text-muted">
                      {promo.description}
                    </Card.Text>
                  </div>
                  <div className="mt-4">
                    <Button
                      href={promo.link}
                      variant="light"
                      className="rounded-pill px-4 py-2"
                      style={{
                        backgroundColor: 'orangered', // Set the button background color
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
