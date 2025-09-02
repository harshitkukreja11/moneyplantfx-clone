
import React, { useEffect } from 'react'; // Import useEffect
import { Container, Row, Col, Card,Button } from 'react-bootstrap';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles



const Withdrawl = () => {
  useEffect(() => {
      AOS.init({
        duration: 1000, // values from 0 to 3000, with step 50ms
        once: false, // whether animation should happen only once - while scrolling down
        });
    // Optional: Refresh AOS on component updates if content changes dynamically
    // AOS.refresh();
  }, []);

  return (
    <div className="py-5 bg-transparent">
      <Container>
        {/* --- Offers Section --- */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-uppercase" data-aos="fade-down"style={{ color: '#0050a0' }}>WITHDRAWAL AT YOUR<br></br>CONVENIENCE</h2>
<p className='text-muted'>Quick withdrawals is what every trader wants! Moneyplant provides easy and convenient methods for withdrawals.</p>
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
        <Button variant="success">Withdraw Fund</Button>
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
        <Button variant="success">Withdraw Fund</Button>
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
        <Button variant="success">Withdraw Fund</Button>
      </Card.Body>
    </Card>
  </Col>
</Row>
</Container>

    </div>
    
  );
};

export default Withdrawl;