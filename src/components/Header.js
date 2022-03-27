import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { Component } from "react";
import { FaHome,FaInfo ,FaAddressCard} from 'react-icons/fa';
import { IconName } from "react-icons/bs";
import { Container, Navbar, Nav } from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <>
        <div className="jumbotron">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>FREEDOM & CITIZENSHIP</h1>
                <h2>F.C MAURITANIA</h2>
              </div>
            </div>
          </div>
        </div>
        <Navbar  collapseOnSelect className="navbar" variant="dark" expand="lg" >
          <Container >
            <Navbar.Brand href="/">
              <img
                src="/assets/images/logo.jpg"
                height="30"
                width="30"
                alt="FC-Mauritania Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="d-flex align-items-center " active href="/home"> <FaHome  /> Home</Nav.Link>
              <Nav.Link className="d-flex align-items-center" href="/about"><FaInfo />About</Nav.Link>
              <Nav.Link className="d-flex align-items-center" href="/contact"><FaAddressCard className="mx-1" /> Contact Us</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
