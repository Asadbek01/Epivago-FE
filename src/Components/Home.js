import React from "react";
import { Row, Button, Form, Container, Col } from "react-bootstrap";
import { BsSearch, BsFillCalendarEventFill, BsPeople } from "react-icons/bs";
import NavBar from "./Navbar";

function MyMain() {
  return (
      <Container>
      <Row className="py-5 m-5 ">
      <Col md={12}>      
        <div className="d-flex">
         <h1 className="mt-3 ml-4" >
          <span style={{ color: "#1391d2" }}>epi</span>
          <span style={{ color: "#fc9e15" }}>va</span>
          <span style={{ color: "#e3403d" }}>go</span>
        </h1>
<div className="m-3">
          <h3 className="">Deals from your favorite booking sites</h3>
          <h6 className="mr-5">
            Try searching for a city, a specific hotel, or even a landmark!
          </h6>
</div>     
        </div>
      </Col>
      </Row>
    
   
        <Row className=" m-5">
            <Col>
          <div className="d-flex">
            <Button className="ml-4"
             variant="light">
              All stays
            </Button>
            <Button className="ml-4 button-class-1" variant="secondary">
              Hotels
            </Button>
            <Button className="ml-4 button-class-1" variant="secondary">
              House/Apartment
            </Button>
          </div>
          <div className="d-flex mt-3 ml-4 "  >
            <div className=" d-flex align-items-center text-muted"  style={{width: "100%"}}>
              <BsSearch color="black" className="mb-2" />
              <Row className="ml-1 ">

              <Form.Group   style={{maxWidth: "100%"}}>
                <Form.Control
                  className="border-0 shadow-none"
                  type="search"
                  placeholder="Insert hotel name"
                 
                  />
              </Form.Group>
                  </Row>
              <BsFillCalendarEventFill color="black" className="ml-5" />
              <div className="ml-3 mr-5" style={{ fontSize: "12px"}}>
                  Check in
                  <br/>
                <span className="" style={{ fontSize: "12px" }}>
                  --/--/--
                </span>
              </div>
              <div className="ml-3 mr-5" style={{ fontSize: "12px"}}>
                  Check Out
                  <br/>
                <span className="" style={{ fontSize: "12px" }}>
                  --/--/--
                </span>
              </div>
              <BsPeople color="black" className="ml-5" />
              <div className="ml-2">
                <p className="mb-0" style={{ fontSize: "12px" }}>
                  1 Room
                </p>
                <p
                  className="mb-0"
                  style={{  color: "black", fontSize: "12px", fontWeight: "700" }}
                  >
                  2 Guests
                </p>
              </div>
              <Button className="ml-5 px-5 rounded-pill" variant="info">
                Search
              </Button>
            </div>
           
            <div className="d-flex align-items-center v-line-needed mx-2 pl-3">
              
            </div>
          </div>
                      </Col>
          <h4 className="ml-4">We compare multiple booking sites at once</h4>
        <Row className=" ml-4 justify-content-between align-items-center w-100">
          <h5 className="text-muted">Booking.com</h5>
          <h5 className="text-muted">Expedia</h5>
          <h5 className="text-muted">Hotels.com</h5>
          <h5 className="text-muted">Vrbo</h5>
          <h5 className="text-muted">All</h5>
          <h5 className="text-muted">Trip.com</h5>
          <h5 className="text-muted">priceline</h5>
          <h6 className="text-muted">+100 more</h6>
        </Row>
        </Row>
        <Row>
        </Row>

                    </Container>
  );
}

export default MyMain;
