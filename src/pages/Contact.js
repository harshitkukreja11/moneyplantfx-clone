// src/pages/Contact.js
import React,{useEffect} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Select from 'react-select';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles


// Country options with ISO codes for flag images
const countryOptions = [
  { value: 'IN', label: 'India', code: 'in' },
  { value: 'AE', label: 'United Arab Emirates', code: 'ae' },
  { value: 'GB', label: 'United Kingdom', code: 'gb' },
  { value: 'US', label: 'United States', code: 'us' },
  { value: 'CA', label: 'Canada', code: 'ca' },
  { value: 'AU', label: 'Australia', code: 'au' },
  { value: 'DE', label: 'Germany', code: 'de' },
  { value: 'FR', label: 'France', code: 'fr' },
  { value: 'JP', label: 'Japan', code: 'jp' },
  { value: 'CN', label: 'China', code: 'cn' },
  { value: 'SG', label: 'Singapore', code: 'sg' },
  { value: 'ZA', label: 'South Africa', code: 'za' },
  { value: 'BR', label: 'Brazil', code: 'br' },
  { value: 'NG', label: 'Nigeria', code: 'ng' },
];

// Flag image for selected country
const customSingleValue = ({ data }) => (
  <div className="d-flex align-items-center">
    <img
      src={`https://flagcdn.com/24x18/${data.code}.png`}
      alt={data.label}
      className="me-2"
      width="20"
      height="15"
    />
    {data.label}
  </div>
);

// Flag image for dropdown options
const customOption = (props) => {
  const { data, innerRef, innerProps } = props;
  return (
    <div ref={innerRef} {...innerProps} className="d-flex align-items-center px-2 py-1">
      <img
        src={`https://flagcdn.com/24x18/${data.code}.png`}
        alt={data.label}
        className="me-2"
        width="20"
        height="15"
      />
      {data.label}
    </div>
  );
};


const Contact = () => {
  useEffect(() => {
        AOS.init({
          duration: 1000, // values from 0 to 3000, with step 50ms
          once: false, // whether animation should happen only once - while scrolling down
          });
      // Optional: Refresh AOS on component updates if content changes dynamically
      // AOS.refresh();
    }, []);
    
  return (
    <div className="bg-transparent">
      {/* Hero Section */}
      <div
        style={{
          position: 'relative',
          backgroundImage: 'url("https://moneyplantfx.com/wp-content/uploads/2024/07/6379114-scaled.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '80px 0',
          height: "380px"
        }}
      >
        <Container className="text-white position-relative z-2">
          <h1 className="text-center fw-bold mb-3 fs-1">Contact Us</h1>
          <h3 className='text-center fw-semibold mb-3'>Home • Contact us</h3>
        </Container>
      </div>

      {/* Office Locations */}
      <h2 className="text-center fw-bold mb-1 mt-5" data-aos="fade-down" style={{ color: '#0050a0' }}>OUR PRESENCE</h2>
      <Container className="py-5">
        <Row className="mb-5">
          <Col md={13} className="mb-4">
            <div style={{ backgroundColor: '#EEEEEE', padding: '30px', borderRadius: '10px',height:"250px" }}>
              <h4 className="fw-semibold mb-3" style={{ color: '#0050a0' }}>Comoros Address</h4>
              <p className="mb-3 d-flex align-items-center" style={{ color: '#fc6716' }}>
                <FaMapMarkerAlt className="me-2" style={{ color: '#0050a0' }} size={18} />
             Registered Address: Bonovo Road, Fomboni, Island of Moheli, P.B 1257, Comoros
              </p>
              <p className="mb-3 d-flex align-items-center" style={{ color: '#fc6716' }}>
                <FaPhoneAlt className="me-2" style={{ color: '#0050a0' }} size={18} />
                Registration Number: HT00324030
              </p>
              <p className="mb-3 d-flex align-items-center" style={{ color: '#fc6716' }}>
                <FaEnvelope className="me-2" style={{ color: '#0050a0' }} size={18} />
               support@moneyplantfze.com
              </p>
            </div>
          </Col>

          
        </Row>

        {/* Contact Form */}
        <Row className="justify-content-center">
          <Col md={13}>
            <h2 className="text-center fw-bold mb-2 mt-2" data-aos="fade-down" style={{ color: '#0050a0' }}>LET'S GET IN TOUCH</h2>
            <p className="text-center fs-4 fw-semibold" style={{ color: "#8a8a8a" }}>
              Fill in the form below and we'll get back to you as soon as possible
            </p>
            <div style={{ backgroundColor: '#EEEEEE', padding: '30px', borderRadius: '10px'}}>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formName" className="mb-3">
                      <Form.Control type="text" placeholder="Enter Your Name" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formEmail" className="mb-3">
                      <Form.Control type="email" placeholder="Enter Your Email" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formPhone" className="mb-3">
                      <Form.Control type="text" placeholder="Enter Your Mobile Number" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formState" className="mb-3">
                      <Form.Control type="text" placeholder="Enter Your State or Province" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formCountry" className="mb-3">
                      <Select
                        options={countryOptions}
                        placeholder="Select Your Country"
                        isSearchable
                        components={{ SingleValue: customSingleValue, Option: customOption }}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Control as="textarea" rows={4} placeholder="Your message..." required />
                </Form.Group>

                <div className="text-start">
                  <Button type="submit" className="px-4" style={{ backgroundColor: '#fc6716', border: 'none' }}>
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <div
  style={{
    backgroundColor: '#0050a0',
    height:"100px",
    textAlign: 'center',
  }}
>
  <img
    src="https://moneyplantfx.com/wp-content/uploads/2024/07/payment-buttons-1536x92.png"
    width="100%"
    alt="newsletter, visa"
    className="my-4"
  />
</div>

    </div>
    
  );
};

export default Contact;
