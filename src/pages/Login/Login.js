import React from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import GoogleLogin from "./GoogleLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [currentUser] = useAuthState(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  if (currentUser) {
    navigate(from, { replace: true });
  }
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="mt-5 container">
      <h2 className="text-center mb-4">Please Login</h2>
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className=" p-4 border rounded shadow">
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
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

              {error && (
                <div className="my-4">
                  <p>{error.code}</p>
                </div>
              )}

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
