// src/components/FeatureCards.js
import { Card, Row, Col } from 'react-bootstrap';

const features = [
  {
    title: 'Lowest Spreads',
    description: '0.0 pips per EUR/USD.',
    image: '/images/spreads.png',
  },
  {
    title: 'Advanced Trading Analytics',
    description: 'Track all your investments with MT5.',
    image: '/images/analytics.png',
  },
  // Add more features as needed
];

function FeatureCards() {
  return (
    <Row>
      {features.map((feature, index) => (
        <Col key={index} md={4}>
          <Card>
            <Card.Img variant="top" src={feature.image} />
            <Card.Body>
              <Card.Title>{feature.title}</Card.Title>
              <Card.Text>{feature.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default FeatureCards;
