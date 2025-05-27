import React, {  useEffect } from 'react'; // Import useEffect
import { Container, Row, Col} from 'react-bootstrap';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles




const forexFeatures = [
 
  {
    image: "https://moneyplantfx.com/wp-content/uploads/2024/07/diversification.png",
    label: "Diversification of portfolio"
  },
  {
    image: "https://moneyplantfx.com/wp-content/uploads/2024/07/ability-to-short.png",
    label: "Ability to short sell"
  },
  {
    image: "https://moneyplantfx.com/wp-content/uploads/2024/07/access-to-global.png",
    label: "Access to global economies"
  },
  {
    image: "https://moneyplantfx.com/wp-content/uploads/2024/07/zero-1.png",
    label: "Zero Commissions"
  }
];

// Index
const indexTick = ["EUR 25 times Index", "$10 times Index","$5 times Index","$250 times Index","$50 times Index","$100 times Index","$20 times Index"];

// Market trade sizes (we'll repeat 0.01 for each symbol)
const marketTradeSize = ["0.01", "0.01","0.01","0.01","0.01","0.01","0.01"];
//MARGIN
const margin =["$1000 per 1 Lot","$2000 per 1 Lot","$1000 per 1 Lot","$1000 per 1 Lot","$1000 per 1 Lot","$1000 per 1 Lot","$1000 per 1 Lot"]
//description
const description=["GERMAN STOCK","DOW JONES","E-MINI DOW JONES","S&P 500","E-MINI S&P 500","NASDAQ 100","E-MINI NASDAQ 100"]

const boxStyle = {
  backgroundColor: '#F0F0F0',
  borderRadius: '20px',
  padding: '20px',
  width: '300px'
};



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
    <h5 className="text-center fw-bold mb-3" style={{ color: '#003c7d' }}>DESCRIPTION(INDEX)</h5>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'center' }}>
      {sizes.map((size, i) => (
        <li key={i} className="mb-2">{size}</li>
      ))}
    </ul>
  </div>
);
const renderIndexTick = (sizes) => (
  <div style={boxStyle}>
    <h5 className="text-center fw-bold mb-3" style={{ color: '#003c7d' }}>TIMES INDEX WITH PER TICK</h5>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'center' }}>
      {sizes.map((size, i) => (
        <li key={i} className="mb-2">{size}</li>
      ))}
    </ul>
  </div>
);



const Indices = () => {
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
            TRADING INDICES
          </h3>
          <p className="text-muted text-center">Indices help traders identify which industry is booming and which one is not. Investors use indices to maintain a desired mix of shares of an industry in their portfolio to manage their risk.
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
          <h2
            className="fw-bold text-center mb-4"data-aos="fade-down"
            style={{ color: "#003c7d", fontFamily: "Roboto, Sans-serif", fontWeight: "400" }}
          >
           CONTRACT SIZE
          </h2>
          <h3
            className="fw-semibold text-center mb-4"data-aos="fade-down"
            style={{ color: "#003c7d", fontFamily: "Roboto, Sans-serif", fontWeight: "400" }}
          >
         (1 lot = 100,000 base units)
          </h3>
          <Row className="g-4 mb-4">
            
             <Col xs={12} md={3} className="d-flex justify-content-center">
              {renderDescription(description)}
            </Col>
            <Col xs={12} md={3} className="d-flex justify-content-center">
              {renderMarketTradeSize(marketTradeSize)}
            </Col>
            <Col xs={12} md={3} className="d-flex justify-content-center">
              {renderMargin(margin)}
            </Col>
            
            <Col xs={12} md={3} className="d-flex justify-content-center">
              {renderIndexTick(indexTick)}
            
            </Col>
            
          </Row>
        </div>
      </Container>
      
       
      

    </div>
  );
};

export default Indices;
