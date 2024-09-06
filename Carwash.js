import React from 'react';
import { Carousel, Card, Container, Row, Col, Navbar, Nav, Footer ,Button,ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import a from './img/12.webp'
import b from './img/13.jpg'
import c from './img/14.jpg'
import dn from './img/8.mp4'
import en from './img/9.jpg'
import fn from './img/10.jpg'
import gn from './img/11.jpg'
import d from './img/15.png'
import e from './img/16.jpg'
import f from './img/17.jpg'
import './SpecialOffers.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Slider = () => (
  
  <Carousel>
    <Carousel.Item>
      <img
       // className="d-block w-100 carousel-img"
        src={en}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Some representative placeholder content for the first slide.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        // className="d-block w-100 carousel-img"
        src={fn}
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Some representative placeholder content for the second slide.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
       // className="d-block w-100 carousel-img"
        src={gn}
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Some representative placeholder content for the third slide.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
// Cards Component
const Cards = () => (
  <Container className="my-4">
    <Row>
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src={a} />
          <Card.Body>
            <Card.Title>CAR CARE</Card.Title>
            <Card.Text>
              Never underestimate the general cleaning and touchup. 
              Our comprehensive car care services ensure your vehicle looks pristine inside and out, making it shine like new.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <br></br>
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src={b} />
          <Card.Body>
            <Card.Title>PANEL REPAIR</Card.Title>
            <Card.Text>
              Restore the form and integrity of any damages to your car panels and bumpers
              . Our expert technicians use high-quality materials to fix dents, scratches, and other imperfections.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src={c} />
          <Card.Body>
            <Card.Title>WINDOW TINTING</Card.Title>
            <Card.Text>
              Transform the look and feel of your vehicle with custom tints. Our window tinting services provide 
              both style and privacy while reducing heat and glare for a more comfortable driving experience.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src={en} />
          <Card.Body>
            <Card.Title>INTERIOR DETAILING</Card.Title>
            <Card.Text>
              Revitalize your car’s interior with our thorough detailing services.
               We clean, condition, and protect all surfaces to ensure a fresh and immaculate cabin.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src={fn} />
          <Card.Body>
            <Card.Title>EXTERIOR WASH & WAX</Card.Title>
            <Card.Text>
              Keep your car's exterior gleaming with our wash and wax services
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src={gn} />
          <Card.Body>
            <Card.Title>ENGINE CLEANING</Card.Title>
            <Card.Text>
              Maintain the performance of your engine with our detailed engine cleaning services.
               
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

const FooterComponent = () => (
  <footer className="bg-dark text-white py-4">
    <Container>
      <Row>
        {/* Contact Information */}
        <Col md={4} className="mb-3">
          <h5>Contact Us</h5>
          <p>123 Car Wash St.</p>
          <p>Car City, CA 12345</p>
          <p>Email: info@carwashservice.com</p>
          <p>Phone: (123) 456-7890</p>
        </Col>

        {/* Quick Links */}
        <Col md={4} className="mb-3">
          <h5>Quick Links</h5>
          <ListGroup>
            <ListGroup.Item action href="#home" className="bg-dark text-white border-0">Home</ListGroup.Item>
            <ListGroup.Item action href="#services" className="bg-dark text-white border-0">Services</ListGroup.Item>
            <ListGroup.Item action href="#aboutus" className="bg-dark text-white border-0">About Us</ListGroup.Item>
            <ListGroup.Item action href="#contactus" className="bg-dark text-white border-0">Contact Us</ListGroup.Item>
          </ListGroup>
        </Col>

        {/* Social Media Links */}
        <Col md={4} className="mb-3">
          <h5>Follow Us</h5>
          <div className="d-flex">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaLinkedin size={24} />
            </a>
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="text-center">
          <p className="mb-0">© 2024 Car Wash Service. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
);  

const VideoSection = () => (
  <Container className="my-4">
    <Row>
      <Col>
        <h1 className="text-center">Clean Swipe - Car Wash Service</h1>
        <div className="video-container">
          <video width="100%" height="auto" controls>
            <source src={dn} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <h2 className="text-center">Protecting Cars For The Past 20 Years</h2>
        <p className="text-center">
          At Clean Swipe, we take pride in delivering top-notch car wash and detailing services. With over two decades of experience, our skilled team ensures your vehicle receives the best care possible. Our services are designed to enhance your car’s appearance and longevity, all while providing you with the utmost satisfaction and trust.
        </p>
      </Col>
    </Row>
  </Container>
);
const SpecialOffers = () => (
  <Container className="my-5">
    <h2 className="text-center mb-4">Special Offers</h2>
    <Row className="g-4">
      <Col md={4}>
        <Card className="special-offer-card">
          <Card.Img variant="top" src={d} className="card-img" />
          <Card.Body>
            <Card.Title className="offer-title">New Customer Discount</Card.Title>
            <Card.Text>
              Get 20% off your first service when you book with us. Mention the code NEW20 at checkout.
            </Card.Text>
            <Button variant="primary" className="mt-2">Book Now</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="special-offer-card">
          <Card.Img variant="top" src={e} className="card-img" />
          <Card.Body>
            <Card.Title className="offer-title">Referral Program</Card.Title>
            <Card.Text>
              Refer a friend and receive a $10 credit towards your next service. Your friend also gets 10% off their first visit!
            </Card.Text>
            <Button variant="primary" className="mt-2">Refer Now</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="special-offer-card">
          <Card.Img variant="top" src={f} className="card-img" />
          <Card.Body>
            <Card.Title className="offer-title">Monthly Special</Card.Title>
            <Card.Text>
              This month, enjoy a free interior vacuum with any exterior wash service. Offer valid until the end of the month.
            </Card.Text>
            <Button variant="primary" className="mt-2">Claim Offer</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);


// Main App Component
const Carwash = () => (
  <div>
        <Navbar className="custom-navbar" bg="dark" variant='dark' expand="lg">
      <Navbar.Brand href="#home">Car Wash Service</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#aboutus">About Us</Nav.Link>
          <Nav.Link href="#contactus">Contact Us</Nav.Link>
          <Nav.Link href="#login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
    <VideoSection />
    <Slider />
    <br></br>
    <h1><center>SERVICES PROVIDED BY US</center></h1>
    
    <Cards />
    <SpecialOffers />
    <FooterComponent />
  </div>
);

export default Carwash;
