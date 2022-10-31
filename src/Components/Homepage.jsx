import React from 'react'
import { Button, Card, Carousel, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import NetflixLogo from '../Images/NetflixLogo.jpg'
import Logo from '../Images/logo.jpg'
import Card1 from '../Images/CardSlide1.jpg'
import Card2 from '../Images/CardSlide2.jpg'
import Card3 from '../Images/CardSlide3.jpg'
import Card4 from '../Images/CardSlide4.jpg'

const Homepage = () => {
    return (
        <div className='bg-dark'>


            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand>
                        <img
                            src={Logo}
                            width="100"
                            height="40"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>Movies</Nav.Link>
                            <Nav.Link>TV Shows</Nav.Link>
                            <Nav.Link>Shots</Nav.Link>
                            <Nav.Link>Pricing</Nav.Link>
                            {/* <NavDropdown title="More.." id="collasible-nav-dropdown" bg="dark" >
                                <NavDropdown.Item >Premium</NavDropdown.Item>
                                <NavDropdown.Item >
                                    Select
                                </NavDropdown.Item>
                                <NavDropdown.Item >Premium Plus</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <div>
                            {/* <Nav.Link >Button 1</Nav.Link>  */}
                            <Button variant="secondary" size="lg" className="me-3" >Login</Button>
                            <Button variant="danger" size="lg" >Sign Up</Button>
                            {/* <Nav.Link >Button 2</Nav.Link> */}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <Carousel indicators={false} controls={false} slide={false}>

                <Carousel.Item>

                    <img
                        className="d-block w-100"
                        src={NetflixLogo}
                        alt="Netflix Logo"
                    />
                    <Carousel.Caption>
                        <h1>Unlimited movies, TV Shows and More</h1>
                        <p>Watch anywhere. Cancel Anytime</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Container fluid className='bg-dark text-light' >
                <Row >
                    <Col>
                    <div className='p-5' >
                        <h1>Enjoy on your TV.</h1><br />
                        <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
                    </div>

                    </Col>
                    <Col>
                        <Card>
                            <Carousel indicators={false} controls={false} >
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={Card1}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={Card2}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={Card3}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>

                        </Card>
                    </Col>
                </Row>
            </Container>


            <Container fluid className='bg-dark text-light' >
                <Row >
                    <Col>
                        <Card>
                            <Carousel indicators={false} controls={false} >
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={Card4}
                                        alt="4th slide"
                                    />
                                </Carousel.Item>
                            </Carousel>

                        </Card>
                    </Col>
                    <Col>
                    <div className='p-5' >
                        <h1>Download your shows to watch offline.</h1><br />
                        <h1>Save your favourites easily and always have something to watch.</h1>
                    </div>

                    </Col>
                </Row>
            </Container>
            <Container fluid className='bg-dark text-light' >
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div className="col mb-3">
      <p className="text-muted">Netflix © 2022</p>
    </div>

    <div className="col mb-3">

    </div>

    <div className="col mb-3">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2 nav-link p-0 text-muted">Home</li>
        <li className="nav-item mb-2 nav-link p-0 text-muted">Features</li>
        <li className="nav-item mb-2 nav-link p-0 text-muted">Pricing</li>
        <li className="nav-item mb-2 nav-link p-0 text-muted">FAQs</li>
        <li className="nav-item mb-2 nav-link p-0 text-muted">About</li>
        
      </ul>
    </div>
    <div className="col mb-3">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2 nav-link p-0 text-muted">Home</li>
        <li className="nav-item mb-2 nav-link p-0 text-muted">Features</li>
        <li className="nav-item mb-2 nav-link p-0 text-muted">Pricing</li>
        <li className="nav-item mb-2 nav-link p-0 text-muted">FAQs</li>
        <li className="nav-item mb-2 nav-link p-0 text-muted">About</li>
        
      </ul>
    </div>
    <div className="col mb-3">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2 nav-link p-0 text-muted">Home</li>
        <li className="nav-item mb-2 nav-link p-0 text-muted">Features</li>
        <li className="nav-item mb-2 nav-link p-0 text-muted">Pricing</li>
        <li className="nav-item mb-2 nav-link p-0 text-muted">FAQs</li>
        <li className="nav-item mb-2 nav-link p-0 text-muted">About</li>
        
      </ul>
    </div>
   
  </footer>
            </Container>

        </div>
    )
}

export default Homepage