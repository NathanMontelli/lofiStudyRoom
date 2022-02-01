import React from 'react';
import { useEffect } from 'react';
import './Navigation.css';
import { Nav, Navbar, Offcanvas, Button, Form, FormControl, Container } from "react-bootstrap";
import { gsap } from "gsap";



const Navigation = () => {

    //Animations
  const tl = gsap.timeline({ defaults: { ease: 'power1.out' } })

  useEffect(() => {



    //Specify a starting and ending point in this case the opacity
    tl.fromTo('.logo', { opacity: 0 }, { opacity: 1, duration: 3 })

  }, [tl])

  //Search DB for Note
  

  return (
    <Navbar bg="" expand={false}>
      <Container fluid>
        <Navbar.Brand className="logo" href="/">Lofi Study Room</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton >
            <Offcanvas.Title
              className="nav-menu" id="offcanvasNavbarLabel">Lofi Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className="nav-links" href="#action2">Profile</Nav.Link>
              <Nav.Link className="nav-links" href="#action2">Background</Nav.Link>
              <Nav.Link className="nav-links" href="/contact">Contanct</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search for notes..."
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation