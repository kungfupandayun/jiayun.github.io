import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";


export default function NavBar() {
  return (
    <Navbar expand="lg"  fixed="top">
    <Container fluid>
      <Navbar.Brand href="/">Jiayun</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" className="justify-content-end">
        <Nav
          className="" 
          style={{ maxHeight: '100px'}}
          navbarScroll
        >
          <Nav.Link href="about">About</Nav.Link>
          <Nav.Link href="project">Projects</Nav.Link>
          <Nav.Link href="resume">Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
};


