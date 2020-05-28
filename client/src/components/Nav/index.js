import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import Button from "react-bootstrap/Button";

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
          {/* Add google font to name */}
        <Navbar.Brand href="/">Kimberly Suares</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
             <Nav.Link href="/contact">Contact</Nav.Link> 
            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
              <NavDropdown.Item href="/portfolio">Portfolio</NavDropdown.Item>
              <NavDropdown.Item href="/skills">Skills</NavDropdown.Item>
              {/* <NavDropdown.Item href="/blog">Blog</NavDropdown.Item> */}
              <NavDropdown.Divider />
              {/* <NavDropdown.Item href="/readygo">ReadyGo</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
           <Form inline>
          <i className="fab fa-github fa-xs"></i>
          <i className="fab fa-twitter-square fa-xs"></i>
          <i className="fab fa-linkedin fa-xs"></i> 
           </Form> 
        </Navbar.Collapse>
      </Navbar>

    )
}
export default NavBar;
