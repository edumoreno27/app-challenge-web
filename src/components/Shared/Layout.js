import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
function Layout(props) {
  return (
    <React.Fragment>
      
        <Navbar bg="dark" variant="dark" >
          <Navbar.Brand href="/">Evaluaciones Web</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Evaluaciones</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container className="mt-4">{props.children}</Container>
        
      
    </React.Fragment>
  );
}

export default Layout;
