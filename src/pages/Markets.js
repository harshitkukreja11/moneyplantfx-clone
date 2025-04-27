// src/pages/Markets.js
import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import './Markets.css';

const forexFeatures = [
  {
    image: "https://moneyplantfx.com/wp-content/uploads/2024/07/trade-over.png",
    label: "Trade over +30 currencies pairs"
  },
  {
    image: "https://moneyplantfx.com/wp-content/uploads/2024/07/competitive-spreads.png",
    label: "Competitive Spreads"
  },
  {
    image: "https://moneyplantfx.com/wp-content/uploads/2024/07/leverage.png",
    label: "1:500 Leverage"
  },
  {
    image: "https://moneyplantfx.com/wp-content/uploads/2024/07/fixed-spreads.png",
    label: "Fixed & Variable Spreads"
  },
  {
    image: "https://moneyplantfx.com/wp-content/uploads/2024/07/zero.png",
    label: "Zero Commission"
  },
  {
    image: "https://moneyplantfx.com/wp-content/uploads/2024/07/no-hidden.png",
    label: "No Hidden Charges"
  },
  {
    image: "https://moneyplantfx.com/wp-content/uploads/2024/07/open24hours.png",
    label: "Open 24 Hours, 5 Days a Week"
  },
  {
    image: "https://moneyplantfx.com/wp-content/uploads/2024/07/deep-interbank.png",
    label: "Deep Interbank Liquidity"
  }
];

const symbolTable1 = [
  "AUDUSD", "EURUSD", "GBPUSD", "USDJPY", "USDCAD", "USDCHF", "NZDUSD",
  "AUDCHF", "AUDCAD", "AUDJPY", "AUDNZD", "CADJPY", "CADCHF", "CHFJPY"
];

const symbolTable2 = [
  "EURAUD", "EURCAD", "EURCHF", "EURGBP", "EURNZD", "EURJPY",
  "GBPAUD", "GBPCAD", "GBPCHF", "GBPJPY", "GBPNZD",
  "NZDCAD", "NZDCHF", "NZDJPY"
];

const Markets = () => {
  return (
    <div className="bg-light py-5">
      <Container>
        {/* Forex Trading Section */}
        <div className="bg-white p-4 rounded shadow-sm">
          <h3 className="fw-bold text-primary mb-4">Trading Forex</h3>
          <p className="text-muted">
            Foreign Exchange offers traders the ability to exchange currencies globally. This market offers high liquidity and allows trading in large volumes.
          </p>

          <Row className="g-4 mb-4">
            {forexFeatures.map((item, index) => (
              <Col key={index} xs={6} md={3} className="text-center">
                <img
                  src={item.image}
                  alt={item.label}
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
                <p className="mt-2 small fw-medium text-muted">{item.label}</p>
              </Col>
            ))}
          </Row>

          <h5 className="fw-bold mt-4 mb-2">Contract Size</h5>
          <p>(1 lot = 100,000 base units)</p>

          <Row>
            <Col md={6}>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Symbol</th>
                    <th>Minimum Trade Size</th>
                  </tr>
                </thead>
                <tbody>
                  {symbolTable1.map((symbol, i) => (
                    <tr key={i}>
                      <td>{symbol}</td>
                      <td>0.01</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
            <Col md={6}>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Symbol</th>
                    <th>Minimum Trade Size</th>
                  </tr>
                </thead>
                <tbody>
                  {symbolTable2.map((symbol, i) => (
                    <tr key={i}>
                      <td>{symbol}</td>
                      <td>0.01</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Markets;
