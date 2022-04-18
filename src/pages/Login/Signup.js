import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";

const signup = () => {
  return (
    <div className="mt-5 container">
      <h2 className="text-center mb-4">Please Signup</h2>
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className=" p-4 border rounded shadow">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>

              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>

            <p className="mt-3">
              Already have an accaount?{" "}
              <Link to="/login" className="text-decoration-none">
                Login please
              </Link>
            </p>
          </div>
          <GoogleLogin></GoogleLogin>
        </div>
      </div>
    </div>
  );
};

export default signup;
