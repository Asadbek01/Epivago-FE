import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
const MyNavBar = () => {
    const navigate = useNavigate()
  return (
    <Navbar expand="lg" className="blog-navbar" fixed="top">
      <Container className="justify-content-between">
        {/* <Navbar.Brand >
          <h2>
          <span style={{ color: "#1391d2" }}>epi</span>
          <span style={{ color: "#fc9e15" }}>va</span>
          <span style={{ color: "#e3403d" }}>go</span>
          </h2>
        </Navbar.Brand> */}
    <div className="row">
   <div className="d-flex ">
     
        <Button className="btn-light" onClick={()=> navigate('/signUp')}>Sign Up</Button>
        <Button className="btn-primary ml-2" onClick={()=> navigate('/')}>Login</Button>
        
              </div>
              </div>

      </Container>
    </Navbar>
  );
};

export default MyNavBar;
