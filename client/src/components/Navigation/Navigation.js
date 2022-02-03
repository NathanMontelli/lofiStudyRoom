import React from 'react';
import { useEffect } from 'react';
import './Navigation.css';
import { Nav, Navbar, Offcanvas, Container } from "react-bootstrap";
import { gsap } from "gsap";




const Navigation = (handleBtnClick) => {
  const handleLogOutUser = () => {
    localStorage.removeItem('user')
    window.location = '/login'
  }

    //Animations
  const tl = gsap.timeline({ defaults: { ease: 'power1.out' } })

  useEffect(() => {



    //Specify a starting and ending point in this case the opacity
    tl.fromTo('.logo', { opacity: 0 }, { opacity: 1, duration: 3 })

  }, [])

  //Search DB for Note
  

  return (
    <Navbar bg="" expand={false} >
      <Container fluid>
        <div></div>
        <Navbar.Brand className="logo" href="/">Lofi Study Room</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header className='hamburger'closeButton >
            <Offcanvas.Title
              className="nav-menu" id="offcanvasNavbarLabel">Lofi Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='hamburger'>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className="nav-links hamburgerToggles" target="_blank" href="/profile">Profile</Nav.Link>
              <Nav.Link className="nav-links" target="_blank" href="/contact">Contact</Nav.Link>
              <Nav.Link className="nav-links" target="_blank" href="/login">Sign Up</Nav.Link>
              <Nav.Link className="nav-links" target="_blank" href="/register">Register</Nav.Link> 
              <Nav.Link onClick={handleLogOutUser} className="nav-links" href="/login">Logout</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation