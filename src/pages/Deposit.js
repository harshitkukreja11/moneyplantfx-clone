
import React, { useEffect } from 'react'; // Import useEffect
import { Container, Row, Col, Card,Button } from 'react-bootstrap';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles



const Deposit = () => {
  useEffect(() => {
      AOS.init({
        duration: 1000, // values from 0 to 3000, with step 50ms
        once: false, // whether animation should happen only once - while scrolling down
        });
    // Optional: Refresh AOS on component updates if content changes dynamically
    // AOS.refresh();
  }, []);

  return (
    <div className="py-5 bg-light">
      <Container>
        {/* --- Offers Section --- */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-uppercase" data-aos="fade-down"style={{ color: '#0050a0' }}>DEPOSIT FUNDS WITH<br></br>
MULTIPLE PAYMENT OPTIONS</h2>
<p className='text-muted'>We offer the option to deposit money through multiple methods, so that you can feel comfortable and safe to deal with us.</p>
        </div>
        
      </Container>
      
      {/* Deposit Option Cards */}
      <Container>
<Row className="mt-5 text-center">
  {/* Bank Wire Transfer */}
  <Col md={4} className="mb-4">
    <Card style={{ backgroundColor: '#EEEEEE', padding: '30px', borderRadius: '10px',height:"250px", width:'350px'  }} className="h-100 ">
      <Card.Body>
        <Card.Title className='fs-5 fw-bold mb-4' style={{ color: '#0050a0' }}>Bank Wire Transfer</Card.Title>
        <img alt='bank' className='mb-4'  src='https://moneyplantfx.com/wp-content/uploads/2024/07/1.png'></img>
        <Card.Text className='text-muted'>
          Currency: USD, EUR<br />
          Minimum Deposit: 100 USD/EUR<br />
          Fees/Commission: No Fees<br />
          Processing Time: 2–4 Working Days
        </Card.Text>
        <Button variant="success">Deposit Fund</Button>
      </Card.Body>
    </Card>
  </Col>

  {/* Credit/Debit Card */}
  <Col md={4} className="mb-4">
    <Card style={{ backgroundColor: '#EEEEEE', padding: '30px', borderRadius: '10px',height:"250px", width:'350px'  }} className="h-100 ">
      <Card.Body>
        <Card.Title className='fs-5 fw-bold mb-4' style={{ color: '#0050a0' }}>Credit/Debit Card</Card.Title>
         <img alt='visa'style={{width:"120px"}} src='https://moneyplantfx.com/wp-content/uploads/2024/07/2.png'></img>
         <img alt='master'style={{width:"100px"}}className='mb-4' src='https://moneyplantfx.com/wp-content/uploads/2024/07/3.png'></img>
        <Card.Text className='text-muted'>
          Currency: EUR, USD
          Fees/Commission: 2.50%<br />
          Processing Time: 24 Hours
        </Card.Text>
        <Button variant="success">Deposit Fund</Button>
      </Card.Body>
    </Card>
  </Col>

  {/* Alternative Payment */}
  <Col md={4} className="mb-4">
    <Card style={{ backgroundColor: '#EEEEEE', padding: '30px', borderRadius: '10px',height:"250px", width:'350px'  }} className="h-100 ">
      <Card.Body>
        <Card.Title className='fs-5 fw-bold mb-4' style={{ color: '#0050a0' }}>Alternative Payment</Card.Title>
        <img style={{width:"270px"}} className='mb-4' alt='scrum' src='https://moneyplantfx.com/wp-content/uploads/2024/07/4.png'></img>
        <Card.Text className='text-muted'>
          Currency: EUR, USD
          Fees/Commission: No Commission<br />
          Processing Time:24 Hours
         <img alt='fasa'className='mb-2 mt-4' src='https://moneyplantfx.com/wp-content/uploads/2024/07/5.png'></img>
          Currency: EUR, USD<br />
          Fees/Commission:0.50%<br />
          Processing Time: 24 Hours
        </Card.Text>
        <Button variant="success">Deposit Fund</Button>
      </Card.Body>
    </Card>
  </Col>
</Row>
</Container>
<p className='text-muted mt-4 ' style={{paddingLeft:"60px"}}>IMPORTANT NOTE: Due to AML / CTF laws, Moneyplant FX Limited cannot deposit funds to third parties. All money withdrawn from your account must go to a bank account in the same name as your Moneyplant FX Limited trading account. Withdrawals made by Bank Wire Transfer usually take 3-5 working days to reach your account. Payments from Joint Bank Accounts are accepted if the trading account holder is one on the parties on the Bank Account. Deposits are processed instantly in case there is no need for additional verification. Moneyplant FX Limited is not liable for any transfer delays you may experience due to a disruption of service in the system of the payment processor. Please note that some issuing banks may not allow credit/debit card deposits. If impacted, please choose another option or contact your Account Service Manager for assistance.</p>

    </div>
    
  );
};

export default Deposit;