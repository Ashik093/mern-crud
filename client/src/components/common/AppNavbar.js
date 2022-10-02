import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export default function AppNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><NavLink to="/">List</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/create">create</NavLink></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
