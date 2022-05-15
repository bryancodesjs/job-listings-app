import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Routes, Route, Link } from "react-router-dom";

class Header extends React.Component{
   render(){
       return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><strong>Job Listings Site</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Link to={"/"} className="nav-link">Home</Link>
                    <Link to={"/details"} className="nav-link">Details</Link>
                    <Link to={"/new"} className="nav-link">Post a Job</Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
       );
   }
}
export default Header;