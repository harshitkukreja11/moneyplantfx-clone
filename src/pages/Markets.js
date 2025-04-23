// src/pages/Markets.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Markets.css'; // Optional custom CSS for hover effects

const markets = [
  {
    title: 'Forex',
    description: 'Trade major, minor, and exotic currency pairs with competitive spreads and fast execution.',
    image: 'https://source.unsplash.com/featured/?forex,finance',
    link: '#forex'
  },
  {
    title: 'Commodities',
    description: 'Access gold, silver, oil, and more. Diversify your portfolio with global commodities.',
    image: 'https://source.unsplash.com/featured/?gold,oil',
    link: '#commodities'
  },
  {
    title: 'Indices',
    description: 'Trade global indices like S&P 500, NASDAQ, FTSE 100, and more.',
    image: 'https://source.unsplash.com/featured/?stocks,index',
    link: '#indices'
  },
  {
    title: 'Crypto',
    description: 'Explore the world of cryptocurrency with Bitcoin, Ethereum, and other digital assets.',
    image: 'https://source.unsplash.com/featured/?crypto,bitcoin',
    link: '#crypto'
  },
];

const Markets = () => {
  return (
    <div className="bg-light py-5">
      <Container>
        <h2 className="text-center fw-bold text-primary mb-5">Our Markets</h2>
        <Row>
          {markets.map((market, index) => (
            <Col key={index} md={6} className="mb-4">
              <Card className="market-card h-100 border-0 shadow-sm">
                <Card.Img
                  variant="top"
                  src={market.image}
                  alt={market.title}
                  style={{ height: '220px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="text-dark fs-4">{market.title}</Card.Title>
                    <Card.Text className="text-muted">{market.description}</Card.Text>
                  </div>
                  <div className="text-end mt-3">
                    <Button variant="outline-primary" href={market.link}>
                      Learn More
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

export default Markets;
