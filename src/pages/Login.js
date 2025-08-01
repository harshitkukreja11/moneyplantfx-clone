import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <div className="login-page d-flex align-items-center justify-content-center">
      <Container>
        <Card className="login-card shadow p-4 mx-auto">
          <div className="text-center mb-4">
            <img
              src="https://wallet.moneyplantfx.com/static/media/logo.ea8fd97f73cc88c32faa.png"
              alt="MoneyPlantFX Wallet Logo"
              className="login-logo"
            />
          </div>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" required />
            </Form.Group>
            <div  className='text-center'>
            <Button type="submit" className="btn btn-light   w-10 ">
              Submit
            </Button>
            </div>

           

            
          </Form>

          <div className="text-center mt-4">
            <span className="text-muted">Don't have an account?</span>{' '}
            <Link to="/signup" className="text-primary text-decoration-none">
              Sign Up
            </Link>
            <br></br>
             <Link to="/forgot-password" className="small text-decoration-none text-primary">
                Forgot Password?
              </Link>
          </div>
        
             
        
        </Card>
      </Container>
    </div>
  );
};

export default Login;
