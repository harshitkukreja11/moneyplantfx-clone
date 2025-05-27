import React, {  useEffect } from 'react'; // Import useEffect
import { Container, Row, Col} from 'react-bootstrap';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles




const forexFeatures = [
 
  {
    image: "https://moneyplantfx.com/wp-content/uploads/2024/07/low-commissions.png",
    label: "Low Commission"
  },
  {
    image: "https://moneyplantfx.com/wp-content/uploads/2024/07/no-overnight.png",
    label: "No Overnight Charges"
  },
  {
    image: "https://moneyplantfx.com/wp-content/uploads/2024/07/low-margin.png",
    label: "Low Margin Requirements"
  },
  {
    image: "https://moneyplantfx.com/wp-content/uploads/2024/07/greater-price.png",
    label: "Greater Price Movements"
  }
];

// Symbol group for the market
const symbolSet = ["CRUDE (CL)", "BRENT (BR)","NATURAL GAS (NG)"];

// Market trade sizes (we'll repeat 0.01 for each symbol)
const marketTradeSize = ["0.01", "0.01","0.01"];
//MARGIN
const margin =["$1000 per 1 Lot","$1000 per 1 Lot","$1000 per 1 Lot"]
//description
const description=["Crude Oil","Brent Crude Oil","Natural Gas"]

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
    <h5 className="text-center fw-bold mb-3" style={{ color: '#003c7d' }}>MINIMUM LOT</h5>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'center' }}>
      {sizes.map((size, i) => (
        <li key={i} className="mb-2">{size}</li>
      ))}
    </ul>
  </div>
);
const renderMargin = (sizes) => (
  <div style={boxStyle}>
    <h5 className="text-center fw-bold mb-3" style={{ color: '#003c7d' }}>MARGIN</h5>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'center' }}>
      {sizes.map((size, i) => (
        <li key={i} className="mb-2">{size}</li>
      ))}
    </ul>
  </div>
);
const renderDescription = (sizes) => (
  <div style={boxStyle}>
    <h5 className="text-center fw-bold mb-3" style={{ color: '#003c7d' }}>DESCRIPTION</h5>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'center' }}>
      {sizes.map((size, i) => (
        <li key={i} className="mb-2">{size}</li>
      ))}
    </ul>
  </div>
);



const Energy = () => {
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
            TRADING ENERGY
          </h3>
          <p className="text-muted">
           OPEC or The Organization of the Petroleum Exporting Countries control a major part of the supply, and hence they control the price of Oil and its derivatives.
Energy trading a always-on market, therefore the prices are always changing, which makes it an ideal instrument for several traders.
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


          {/* 3 Containers Displayed Horizontally */}
          <h3
            className="fw-bold text-center mb-4"data-aos="fade-down"
            style={{ color: "#003c7d", fontFamily: "Roboto, Sans-serif", fontWeight: "400" }}
          >
           ENERGIES TRADING CONDITIONS
          </h3>
          <Row className="g-4 mb-4">
            <Col xs={12} md={3} className="d-flex justify-content-center">
              {renderSymbolBoxes(symbolSet, 'SYMBOLS')}
            
            </Col>
             <Col xs={12} md={3} className="d-flex justify-content-center">
              {renderDescription(description)}
            </Col>
            <Col xs={12} md={3} className="d-flex justify-content-center">
              {renderMargin(margin)}
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

export default Energy;
