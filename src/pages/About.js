import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="about-main">
      <div className="about-highlighted-section  d-flex align-items-center text-white">
        <div className="overlay position-absolute top-0 start-0 end-0 bottom-0 d-flex flex-column align-items-center justify-content-center text-center"style={{paddingLeft:"500px",paddingTop:"200px"}}>
          <h1 className="fw-bolder mb-3 fs-1" >About Us</h1>
          <p className="lead fw-semibold">
            <a href="/" className="text-white text-decoration-none">Home</a>&nbsp;•&nbsp;About Us
          </p>
        </div>
      </div>

      <Container className="mt-5">
        <h3 className="text-center key-features-title mb-4" data-aos="zoom-in">WHY CHOOSE <b>MONEYPLANT?</b></h3>
        <p>
        We have a well developed and diverse set of offerings that will enable you to choose your own financial instruments according to your trading preferences. We provide customized trading journeys and help you figure out the trading platform that would suit you the best according to your funding methods.
        </p>
        <Row className="text-center">
          {[
            {
              img: "icon-6.png",
              text: "Offering Competitive Spreads"
            },
            {
              img: "icon-4.png",
              text: "Ultra Fast Execution"
            },
            {
              img: "icon-2.png",
              text: "Earn Money by Referring Friends"
            },
            {
              img: "icon-5.png",
              text: "Safety of Client Funds"
            },
            {
              img: "icon-3.png",
              text: "New & Improved MetaTrader"
            }
          ].map((item, index) => (
            <Col xs={12} md={6} className="mb-4" key={index}>
              <div className="d-flex align-items-center">
                <img
                  src={`https://moneyplantfx.com/wp-content/uploads/2024/07/${item.img}`}
                  alt={item.text}
                  width="120"
                  className="me-3"
                />
                <p style={{ color: '#0050a0', fontSize: '1.6rem', fontWeight: 'normal' }} className="mb-0">
                  {item.text}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default About;
