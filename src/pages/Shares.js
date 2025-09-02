import React, { useState, useEffect } from 'react'; // Import useEffect
import { Container, Row, Col} from 'react-bootstrap';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import 'bootstrap/dist/css/bootstrap.min.css';




const forexFeatures = [
 
  {
    image: "https://moneyplantfx.com/wp-content/uploads/2024/07/leverage.png",
    label: "Use leverage to trade shares"
  },
  {
    image: "https://moneyplantfx.com/wp-content/uploads/2024/07/low-margin.png",
    label: "Low Margin Requirements"
  },
  {
    image: "https://moneyplantfx.com/wp-content/uploads/2024/07/buysell-1.png",
    label: "Buy & Sell at the same time"
  }
];
 const sharedData = [
    ["US", "3M", "3M (1 Lot = 1 Share)"],
    ["US", "AIG", "AIG (1 Lot = 1 Share)"],
    ["US", "AMD", "Advanced Micro Devices, Inc. (1 Lot = 1 Share)"],
    ["US", "AMEX", "American Express (1 Lot = 1 Share)"],
    ["US", "AON", "AON (1 Lot = 1 Share)"],
    ["US", "Activision", "Activision Blizzard (1 Lot = 1 Share)"],
    ["US", "Adobe", "Adobe Systems (1 Lot = 1 Share)"],
    ["US", "AIRBNB", "AIRBNB Inc (1 Lot = 1 Share)"],
    ["US", "Alexion", "Alexion Pharmaceuticals (1 Lot = 1 Share)"],
    ["US", "Alibaba", "Alibaba Group Holding Ltd (1 Lot = 1 Share)"],
    ["US", "3M", "3M (1 Lot = 1 Share)"],
    ["US", "AIG", "AIG (1 Lot = 1 Share)"],
    ["US", "AMD", "Advanced Micro Devices, Inc. (1 Lot = 1 Share)"],
    ["US", "AMEX", "American Express (1 Lot = 1 Share)"],
    ["US", "AON", "AON (1 Lot = 1 Share)"],
    ["US", "Activision", "Activision Blizzard (1 Lot = 1 Share)"],
    ["US", "Adobe", "Adobe Systems (1 Lot = 1 Share)"],
    ["US", "AIRBNB", "AIRBNB Inc (1 Lot = 1 Share)"],
    ["US", "Alexion", "Alexion Pharmaceuticals (1 Lot = 1 Share)"],
    ["US", "Alibaba", "Alibaba Group Holding Ltd (1 Lot = 1 Share)"]
  ];



const Shares = () => {
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
     const [activeTab, setActiveTab] = useState('USA');
     

  return (
    <div className="bg-transparent py-5">
      <Container>
        {/* Forex Trading Features */}
        <div className="p-4">
          <h3
            className="fw-bold text-center mb-4"data-aos="fade-down"
            style={{ color: "#003c7d", fontFamily: "Roboto, Sans-serif", fontWeight: "400" }}
          >
            TRADING SHARES
          </h3>
          <p className="text-muted text-center">A share or stock is a document issued by a company, which entitles its holder to be one of the owners of the company. A share is issued by a company or can be purchased from the stock market. By purchasing a share you can earn a portion of the company and by selling the shares you get capital.

           <br/><br/>Share CFDs, or Share CFD trading, creates a unique opportunity to speculate on the share price movements of publicly listed companies traded on exchanges such as DAX, FTSE, NYSE and NASDAQ, without the need to own the underlying stock. You can even take advantage of market conditions when shares are trending in bearish territory.
          </p>

          <Row className="g-4 mb-4">
            {forexFeatures.map((item, index) => (
              <Col key={index} xs={6} md={4} className="text-center">
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
            className="fw-semibold text-center mb-1 mt-4"data-aos="fade-down"
            style={{ color: "#003c7d", fontFamily: "Roboto, Sans-serif", fontWeight: "400" }}
          >
       SHARES
          </h3>
          <p className='text-muted text-center mb-1'>Trade CFDs on the world´s most famous blue-chips global companies</p>
          
        </div>
      </Container>
      {/*table of usa and europe*/}
        <div className="container py-5">
      <div className="position-relative">
        {/* Table */}
        <div className="table-responsive">
          <table className="table table-bordered text-center align-middle">
            {/* Tabs on top-left corner of the table */}
            <thead className=" position-relative">
              <tr>
                <th colSpan="3" className="p-0">
                  <div className="d-flex" style={{ borderBottom: '1px solid #dee2e6' }}>
                    <div
                      onClick={() => setActiveTab('USA')}
                      className={`border-end border-bottom-0 px-4 py-2`}
                      style={{
                        color: activeTab === 'USA' ? 'orange' : 'blue',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        borderColor: '#dee2e6',
                      }}
                    >
                      USA
                    </div>
                    <div
                      onClick={() => setActiveTab('EUROPE')}
                      className={`border-end border-bottom-0 px-4 py-2`}
                      style={{
                        color: activeTab === 'EUROPE' ? 'orange' : 'blue',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        borderColor: '#dee2e6',
                      }}
                    >
                      EUROPE
                    </div>
                  </div>
                </th>
              </tr>
              <tr>
                <th>Country</th>
                <th>Share Name</th>
                <th>Margin</th>
              </tr>
            </thead>
            <tbody>
              {sharedData.map(([country, share, margin], index) => (
                <tr key={index}>
                  <td>{country}</td>
                  <td>{share}</td>
                  <td>{margin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
      

    </div>
  );
};

export default Shares;
