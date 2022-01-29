import React from 'react';
import { useEffect } from 'react';
import './Navigation.css';
import { Nav, Navbar, NavDropdown, Offcanvas, Button, Form, FormControl, Container } from "react-bootstrap";
import { gsap } from "gsap";



const Navigation = () => {

  const tl = gsap.timeline({ defaults: { ease: 'power1.out' } })

  useEffect(() => {



    //Specify a starting and ending point in this case the opacity
    tl.fromTo('.logo', { opacity: 0 }, { opacity: 1, duration: 3 })

  },[tl])

  return (
    <Navbar bg="" expand={false}>
      <Container fluid>
        <Navbar.Brand className="logo" href="/">Lofi Study Room</Navbar.Brand>
        <Navbar.Toggle className="hamburger" aria-controls="offcanvasNavbar" />
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
              <NavDropdown className="nav-station" title="Stations" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#action3">Chill</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Moody</NavDropdown.Item>
                <NavDropdown.Item href="#action5"> Ambient </NavDropdown.Item>
              </NavDropdown>
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
            <Nav.Link className="nav-links" href="/login">Login</Nav.Link>
            <Nav.Link className="nav-links" href="/register">Register</Nav.Link>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation