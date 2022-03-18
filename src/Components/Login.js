import React, { useState } from "react";
import { Form, Button,  Row, Col } from "react-bootstrap";
import Home from "./Home";
import { useNavigate } from "react-router";
 import { BsGoogle } from "react-icons/bs";
const Login = () => {
    const navigate = useNavigate()
  const [registration, setRegistration] = useState({
   
    email: "",
    password: "",
    rememberMe: false
  });

  const handleInput = (fieldName, value) => {
    setRegistration({
      ...registration,
      [fieldName]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3002/user/login", {
        method: "POST",
        body: JSON.stringify(registration),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        const authors = await response.json();
        localStorage.setItem("MyToken", authors.accessToken);
        setRegistration({
          email: "",
          password: "",
          rememberMe: false
        });
      } else {
        console.log("Error while fetched!");
      }
    } catch (error) {
        console.log(error)
    }
  };
  return (
    <>
        <Row className="d-flex justify-content-center mt-4">
          <Col md={4} xs={6} sm={3}>
      
              <div className="register-form">
                <Button className="btn-light mb-2" style={{ width: "40%" }}><a href="http://localhost:3002/user/googleLogin"><BsGoogle className="mr-2" />Google Login</a></Button>
              <Form onSubmit={handleSubmit}>
                  <div>
                <h2 className="text-center pb-2">
                  Welcome Back
                </h2>
                 <img className="LoginImage pb-3" src="https://www.freeiconspng.com/uploads/person-icon-8.png" />
                  </div>
                <Form.Group className="pb-3">
                  
                  <Form.Control
                    className="rounded-pill"
                    type="email"
                    placeholder="Enter email"
                    value={registration.email}
                    onChange={(e) => {
                      handleInput("email", e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group>
                
                  <Form.Control
                    className="rounded-pill"
                    type="password"
                    placeholder="Password"
                    value={registration.password}
                    onChange={(e) => {
                      handleInput("password", e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group className="d-flex mt-4">
          <Form.Check
            type='checkbox'
            label='Remember Me?'
            
            checked={registration.checked}
            onChange={(e) => {
              handleInput('rememberMe', e.target.checked)
            }}
          />
           

                <Button
                
                  variant="primary"
                  type="submit"
                //   style={{ width: "25%" }}
                  className="ml-auto rounded-pill"
                >
                  Login
                </Button>


          </Form.Group>
              <div className="row">
                  <div className="ml-auto m-2">

              <a href="" className="forgotPassword">Forgot Password?</a>
                  </div>


              </div>
            
              </Form>
            </div>
<p className="mt-4">Don't have an account? <a href="/signUp">Sign Up</a></p>
      
      </Col>
    </Row>
    </>
  );
};
export default Login;