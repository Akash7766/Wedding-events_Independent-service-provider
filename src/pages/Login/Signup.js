import React from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import GoogleLogin from "./GoogleLogin";

const Signup = () => {
  const [currentUser] = useAuthState(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  if (currentUser) {
    navigate("/checkout");
  }

  const handleSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(error);
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="mt-5 container">
      <h2 className="text-center mb-4">Please Signup</h2>
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className=" p-4 border rounded shadow">
            <Form onSubmit={handleSignUp}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Signup
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

export default Signup;
