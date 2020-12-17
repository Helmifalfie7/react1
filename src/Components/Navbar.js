import React from "react";
import {Nav,NavDropdown,Navbar,Form,FormControl,Button} from 'react-bootstrap';
import './css/Navstyle.css'

function Navigation(){
    return (
        <div>
        <Navbar  expand="lg">
            <img className="logo"src="/Images/logo.jpg" alt="logo"/>
  <Navbar.Brand href="#home">Marijuana Shop</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About us</Nav.Link>
      <NavDropdown title="Products" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Flower</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Pipes</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Vapes</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Extracts</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.5">Edibles</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.6">Accessories</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-3" />
      <Button variant="outline-success" className="mr-sm-5">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
</div>
    )
}
export default Navigation
