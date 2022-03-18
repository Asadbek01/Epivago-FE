import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
const NavBar = () => {
    const navigate = useNavigate()
  return (
    <Navbar expand="lg" className="blog-navbar" fixed="top">
      <Container className="justify-content-between">
        <Navbar.Brand >
         Epivago
        </Navbar.Brand>
    <div className="row">
   <div className="d-flex ">
     
        <Button className="btn-light" onClick={()=> navigate('/signUp')}>Sign Up</Button>
        <Button className="btn-primary ml-2" onClick={()=> navigate('/login')}>Login</Button>
        
              </div>
              </div>

      </Container>
    </Navbar>
  );
};

export default NavBar;
