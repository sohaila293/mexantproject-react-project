import { React } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import logo from "../../images/logo.png";
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="nav">
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#services" className='text-white'>Services</Nav.Link>
            <Nav.Link href="#about" className='text-white'>About</Nav.Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown" className='text-white'>
              <NavDropdown.Item href="#about" >About Us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#services">
               Our Services
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#testimonials" className='text-white'>Testimonials</Nav.Link>
            <Nav.Link href="#contact"className='text-white'>
            <Button variant="success">Contact Us</Button>{' '}
            </Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;