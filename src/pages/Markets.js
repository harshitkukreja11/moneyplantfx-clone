import React, { useEffect } from 'react'; // Import useEffect
import { Container, Row, Col} from 'react-bootstrap';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles

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

// Symbol group for the market
const symbolSet = ["AUDUSD", "EURUSD", "GBPUSD", "USDJPY", "USDCAD", "USDCHF", "NZDUSD","AUDCHF","AUDCAD","AUDJPY","AUDNZD","CADJPY","CADCHF","CHFJPY"];

// Market trade sizes (we'll repeat 0.01 for each symbol)
const marketTradeSize = ["0.01", "0.01", "0.01", "0.01", "0.01", "0.01", "0.01","0.01", "0.01", "0.01", "0.01", "0.01", "0.01", "0.01"];

const boxStyle = {
  backgroundColor: '#F0F0F0',
  borderRadius: '20px',
  padding: '20px',
  width: '300px'
};

const renderSymbolBoxes = (symbols, label) => (
  <div style={boxStyle}>
    <h5 className="text-center fw-bold mb-3" style={{ color: '#003c7d' }}>{label}</h5>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'center' }}>
      {symbols.map((symbol, i) => (
        <li key={i} className="mb-2">{symbol}</li>
      ))}
    </ul>
  </div>
);

const renderMarketTradeSize = (sizes) => (
  <div style={boxStyle}>
    <h5 className="text-center fw-bold mb-3" style={{ color: '#003c7d' }}>MINIMUM TRADE SIZE</h5>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'center' }}>
      {sizes.map((size, i) => (
        <li key={i} className="mb-2">{size}</li>
      ))}
    </ul>
  </div>
);

const Markets = () => {
  useEffect(() => {
      AOS.init({
        duration: 1000, // values from 0 to 3000, with step 50ms
        once: false, // whether animation should happen only once - while scrolling down
        // mirror: true, // whether elements should animate out while scrolling past them
        // offset: 120, // offset (in px) from the original trigger point
        // delay: 100, // values from 0 to 3000, with step 50ms
        // easing: 'ease-in-out', // default easing for AOS animations
      });
      // Optional: Refresh AOS on component updates if content changes dynamically
      // AOS.refresh();
    }, []);
  return (
    <div className="bg-light py-5">
      <Container>
        {/* Forex Trading Features */}
        <div className="p-4">
          <h3
            className="fw-bold text-center mb-4"data-aos="fade-down"
            style={{ color: "#003c7d", fontFamily: "Roboto, Sans-serif", fontWeight: "400" }}
          >
            Trading Forex
          </h3>
          <p className="text-muted">
            Foreign Exchange offers traders the ability to exchange currencies globally. This market offers high liquidity and allows trading in large volumes.
          </p>

          <Row className="g-4 mb-4">
            {forexFeatures.map((item, index) => (
              <Col key={index} xs={6} md={3} className="text-center">
                <img
                  src={item.image}
                  alt={item.label}
                  style={{ width: '100px', height: '100px', objectFit: 'contain' }}
                />
                <p className="mt-2 fw-medium" style={{ color: "#003c7d" }}>{item.label}</p>
              </Col>
            ))}
          </Row>

          {/* Contract Size Title */}
          <h5 className="fw-bold mt-5 mb-1 text-center"data-aos="fade-down" style={{ color: "#003c7d" }}>CONTRACT SIZE</h5>
          <p className="fw-bold mt-1 mb-4 text-center"data-aos="fade-down" style={{ color: "#003c7d" }}>(1 lot = 100,000 base units)</p>

          {/* 4 Containers Displayed Horizontally */}
          <Row className="g-4 mb-4">
            <Col xs={12} md={3} className="d-flex justify-content-center">
              {renderSymbolBoxes(symbolSet, 'SYMBOLS')}
            
            </Col>
            <Col xs={12} md={3} className="d-flex justify-content-center">
              {renderMarketTradeSize(marketTradeSize)}
            </Col>
            <Col xs={12} md={3} className="d-flex justify-content-center">
              {renderSymbolBoxes(symbolSet, 'SYMBOLS')}
            </Col>
            <Col xs={12} md={3} className="d-flex justify-content-center">
              {renderMarketTradeSize(marketTradeSize)}
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Markets;
