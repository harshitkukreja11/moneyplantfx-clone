// src/pages/Accounts.js
import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaChartLine, FaCog, FaMoneyBillWave, FaUserCheck, FaCogs, FaHeadset, FaInfoCircle, FaCheckCircle } from 'react-icons/fa'; // Updated import with more common icons

const accountsData = [
  {
    title: "Standard Account",
    spreads: "From 1.2 pips",
    leverage: "Up to 1:500",
    commission: "No",
    minDeposit: "$100",
    baseCurrency: "USD/EUR",
    execution: "Market",
    marginCall: "50%",
    stopOutLevel: "20%",
    easAllowed: "Yes",
    support: "24/5",
    bestFor: "Beginners & Experienced Traders",
    features: [
      "Low spreads",
      "High leverage",
      "Commission-free trading",
      "Suitable for all trading styles",
      "MT5 Platform",
      "EA's Allowed",
      "24/5 Support"
    ],
    recommended: true,
    detailsLink: "/standard-account-details"
  },

];

const Accounts = () => {
  return (
    <div className="bg-light py-5">
      <Container>
        <h2 className="text-center text-primary fw-bold mb-5">Account Types</h2>
        <p className="text-center text-muted mb-4">
          Your experience and skillset won’t affect your earnings! We at Moneyplant provide you full set of tools for successful trading.
        </p>
        <Row className="justify-content-center">
          {accountsData.map((account, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm border-0 hover-shadow">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <Card.Title className="fs-4 fw-semibold text-dark mb-0">
                        {account.title}
                      </Card.Title>
                      {account.recommended && (
                        <Badge bg="warning" text="dark">Recommended</Badge>
                      )}
                    </div>
                    <ul className="list-unstyled text-muted mb-4">
                      <li className="mb-2"><FaChartLine className="me-2 text-primary" /> Spreads: {account.spreads}</li>
                      <li className="mb-2"><FaCog className="me-2 text-primary" /> Leverage: {account.leverage}</li>
                      <li className="mb-2"><FaMoneyBillWave className="me-2 text-primary" /> Commission: {account.commission === 'X' ? 'N/A' : account.commission}</li>
                      <li className="mb-2"><FaUserCheck className="me-2 text-primary" /> Min. Deposit: {account.minDeposit}</li>
                      {account.baseCurrency && <li className="mb-2"><FaCogs className="me-2 text-primary" /> Base Currency: {account.baseCurrency}</li>}
                      {account.execution && <li className="mb-2"><FaCogs className="me-2 text-primary" /> Execution: {account.execution}</li>}
                      {account.marginCall && <li className="mb-2"><FaInfoCircle className="me-2 text-primary" /> Margin Call: {account.marginCall}</li>}
                      {account.stopOutLevel && <li className="mb-2"><FaInfoCircle className="me-2 text-primary" /> Stop-Out Level: {account.stopOutLevel}</li>}
                      {account.easAllowed && <li className="mb-2"><FaCheckCircle className="me-2 text-primary" /> EA's Allowed: {account.easAllowed}</li>}
                      {account.support && <li className="mb-2"><FaHeadset className="me-2 text-primary" /> Support: {account.support}</li>}
                    </ul>
                    {account.bestFor && (
                      <p className="text-muted small mb-3">
                        <strong>Best For:</strong> {account.bestFor}
                      </p>
                    )}
                    <ul className="list-unstyled text-muted small">
                      {account.features.map((feature, idx) => (
                        <li key={idx} className="mb-1">• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 d-grid gap-2">
                    <Button variant="primary" href={`/open-${account.title.toLowerCase().replace(/ /g, '-')}`}>
                      Open Account
                    </Button>
                    {account.detailsLink && (
                      <Button variant="outline-secondary" size="sm" href={account.detailsLink}>
                        View Details
                      </Button>
                    )}
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

export default Accounts;