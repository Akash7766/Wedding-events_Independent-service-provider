import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";

const Login = () => {
  return (
    <div className="mt-5 container">
      <h2 className="text-center mb-4">Please Login</h2>
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className=" p-4 border rounded shadow">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>

              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
            <p className="my-2 mt-3">
              Forgot your password?
              <Link to="/reset" className="text-decoration-none ms-2 ">
                Reset your password
              </Link>
            </p>
            <p className="">
              New to Wedding Events?{" "}
              <Link to="/signup" className="text-decoration-none">
                Create a new accaount
              </Link>
            </p>
          </div>
          <GoogleLogin></GoogleLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
