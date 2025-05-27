import React, { useState, useEffect } from 'react'; // Import useEffect
import { Container, Row, Col} from 'react-bootstrap';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import { FaPlus, FaMinus } from 'react-icons/fa';



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
const symbolSet = ["AUDUSD", "EURUSD"];

// Market trade sizes (we'll repeat 0.01 for each symbol)
const marketTradeSize = ["0.01", "0.01"];
//CONTRACT SIZE
const contractSize =["1 LOT = 5000 OZ","1 LOT = 100 OZ"]

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
const renderContractSize = (sizes) => (
  <div style={boxStyle}>
    <h5 className="text-center fw-bold mb-3" style={{ color: '#003c7d' }}>CONTRACT SIZE</h5>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'center' }}>
      {sizes.map((size, i) => (
        <li key={i} className="mb-2">{size}</li>
      ))}
    </ul>
  </div>
);

const faqs = [
  {
    question: "Why should I invest in precious metals trading?",
    answer: "There are multiple reasons why you should join the bandwagon of precious metals trading. Investors across the world call metal trading a Safe-Haven as precious metals allow traders to hedge their investments against all kinds of market movements Be it Gold, Silver or other Platinum group metals, they are one of the best choices for traders looking for a good investment option."
  },
  {
    question: "Can I make profits by trading in precious metals?",
    answer: "The valuable and rare metals such as Gold, Silver, Platinum, Palladium and other similar elements are the preferred choice of investors looking to hedge their money while ensuring steady returnsGold trading has time and again proven to be the most trusted investment owing to the property of Gold retaining its value even in the toughest markets.Industrial applications of the other industrial metals across sectors such as jewellery, automobiles, electrical and the like ensure sustained global demand.This makes precious metal trading a highly profitable option for metal traders.The one-word answer to your question is YES, you can make profits by trading precious metals in India provided that you make the right investment decisions and choose the right metal trading platform like MoneyPlant to help you start trading."
  },
  {
    question: "How difficult is the metals market and investing in precious metals?",
    answer: "It is like any other complex instruments market. For investors looking to make it big in this trade you need to have a solid understanding of </br>Industrial demand and supply of precious metalsSound market analysisRisk managementPrecious metal pricesMost importantly, you need a reliable precious metal trading platform that offersQuick trade executionReliable service & supportMinimum exchange commissionMaintaining a steady return on investment for from the precious metal trade isn’t difficult – all you need is a basic understanding and a trusted metal trading exchange."
  },
  {
    question: "What are base metals and what are precious metals?",
    answer: "Precious metals like gold and silver are rare and valuable. Base metals like copper and aluminum are more common and used in industry."
  },
  {
    question: "Which is the best precious metal investing option?",
    answer: "Gold is the most popular, but silver and platinum also offer opportunities depending on your risk profile and investment goals."
  },
  {
    question: "How do I start trading in precious metals?",
    answer: "You can start by opening an account with a regulated broker, funding it, and using platforms to trade gold, silver, platinum, etc."
  },
  {
    question: "Why start trading precious metals with MoneyPlant?",
    answer: "MoneyPlant provides expert insights, tight spreads, and advanced platforms, making it a trusted choice for metal trading."
  },
];


const PreciousMetal = () => {
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
    const [activeIndex, setActiveIndex] = useState(null);

const toggleIndex = (index) => {
  setActiveIndex(activeIndex === index ? null : index);
};
  return (
    <div className="bg-light py-5">
      <Container>
        {/* Forex Trading Features */}
        <div className="p-4">
          <h3
            className="fw-bold text-center mb-4"data-aos="fade-down"
            style={{ color: "#003c7d", fontFamily: "Roboto, Sans-serif", fontWeight: "400" }}
          >
            TRADING PRECIOUS METALS
          </h3>
          <p className="text-muted">
            Commodities have always been an important portion of a portfolio. Particularly, Gold and Silver trading are used to hedge the risk against relatively unstable market factors like political instability, dollar weakness, inflation, etc. since there metals are unaffected by market conditions.
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
          <Row className="g-4 mb-4">
            <Col xs={12} md={4} className="d-flex justify-content-center">
              {renderSymbolBoxes(symbolSet, 'SYMBOLS')}
            
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center">
              {renderMarketTradeSize(marketTradeSize)}
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center">
              {renderContractSize(contractSize)}
            </Col>
          </Row>
        </div>
      </Container>
      {/* FAQ Section */}
<div className="mt-5">
  <h1
    className="fw-semibold text-center mb-4"
    data-aos="fade-down"
    style={{ color: "#003c7d", fontFamily: "Roboto, Sans-serif" }}
  >
    FAQs
  </h1>
  <Row className="justify-content-center">
    <Col md={10}>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="faq-item border-bottom py-3"
          onClick={() => toggleIndex(index)}
          style={{ cursor: 'pointer' }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <h5
              className={`mb-0 fw-semibold ${
                activeIndex === index ? 'text-warning' : 'text-primary'
              }`}
            >
              {faq.question}
            </h5>
            <span className="text-primary">
              {activeIndex === index ? <FaMinus /> : <FaPlus />}
            </span>
          </div>
          <p
            className={`mt-2 text-muted transition-opacity ${
              activeIndex === index ? 'opacity-100' : 'opacity-0 d-none'
            }`}
          >
            {faq.answer}
          </p>
        </div>
      ))}
    </Col>
  </Row>
</div>

    </div>
  );
};

export default PreciousMetal;
