
import React, {useState}from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { FaHome,FaInfo ,FaAddressCard} from 'react-icons/fa';

import { Container, Navbar, Nav } from "react-bootstrap";

 function Header(){
   const [selected,setSelected]=useState(1)
function handleSelect(e) {
  //alert(`selected ${selectedKey}`);
 const selectedKey=e.target.eventKey
 setSelected(selectedKey)
  console.log(selectedKey)


}
 
    return (
      <>
        <div className="jumbotron">
          <div className="container">
            <div className="row">
              <div className="col- col-sm-10 mb-4">
                <h1>FREEDOM & CITIZENSHIP</h1>
                <h2>F.C MAURITANIA</h2>
              </div>
              <div className=" col-12 col-sm-2 my-auto">
                  <HashLink to="/contact/#goDonate">
                <button
                  type="button"
                  className=" col btn btn-success mb-2"
                  id="creditCard"
                
                >
                  Donate
                </button>
                </HashLink>
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
            <Nav className="me-auto"  >
              <NavLink className="mx-2 my-1"    to="home"> <FaHome  /> Home</NavLink>
              <NavLink className="mx-2 my-1"    to="about"><FaInfo />About</NavLink>
              <NavLink className="mx-2 my-1"   to="contact"><FaAddressCard  /> Contact Us</NavLink>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
export default Header
