// import react from 'react';

import React from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Image, Badge,Form } from 'react-bootstrap';

function HomeComponent() {
  return (
    
  <>
    <Container fluid style={{backgroundColor: '#000',color:'#fff',width:'100%'}}>
      <Row >
        <Col >Free shipping, 30-day return or refund guarantee.</Col> 
      <Col md="auto">
          <button onClick={() => alert('Sign in clicked')} className="btn btn-link p-0 me-3">Sign in</button>
          <button onClick={() => alert('FAQs clicked')} className="btn btn-link p-0">FAQs</button>
          {/* <span>Usd</span> */}
          </Col>
          <Col xs lg="2">
          <Form.Select aria-label="Default select example" style={{ border: 'none',backgroundColor:'#000',color:'#fff' }}>
            <option value="1">USD</option>
            <option value="2">EUR</option>
            <option value="3">MAD</option>
          </Form.Select>
        </Col>
      </Row>
        </Container>
      <Container>
        <Row className="align-items-center">
          <Col lg={3} md={3}>
            <a href="./index.html">
              <Image src="img/logo.png" alt="Logo" />
            </a>
          </Col>
          <Col lg={6} md={6}>
            <Navbar expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="./index.html">Home</Nav.Link>
                  <Nav.Link href="./shop.html">Shop</Nav.Link>
                  <NavDropdown title="Pages" id="basic-nav-dropdown">
                    <NavDropdown.Item href="./about.html">About Us</NavDropdown.Item>
                    <NavDropdown.Item href="./shop-details.html">Shop Details</NavDropdown.Item>
                    <NavDropdown.Item href="./shopping-cart.html">Shopping Cart</NavDropdown.Item>
                    <NavDropdown.Item href="./checkout.html">Check Out</NavDropdown.Item>
                    <NavDropdown.Item href="./blog-details.html">Blog Details</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="./blog.html">Blog</Nav.Link>
                  <Nav.Link href="./contact.html">Contacts</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
          <Col lg={3} md={3}>
            <div className="d-flex justify-content-end align-items-center">
              <button onClick={() => alert('Search clicked')} className="btn btn-link p-0 me-3">
                <Image src="img/icon/search.png" alt="Search" />
              </button>
              <button onClick={() => alert('Favorites clicked')} className="btn btn-link p-0 me-3">
                <Image src="img/icon/heart.png" alt="Favorites" />
              </button>
              <button onClick={() => alert('Cart clicked')} className="btn btn-link p-0 me-3 position-relative">
                <Image src="img/icon/cart.png" alt="Cart" />
                <Badge bg="secondary" className="position-absolute top-0 start-100 translate-middle">0</Badge>
              </button>
              <div className="price">$0.00</div>
            </div>
          </Col>
        </Row>
        <div className="canvas__open">
          <i className="fa fa-bars"></i>
        </div>
      </Container>
    
    </>
  );
}

export default HomeComponent;
