import React from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Reset = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const handleReset = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    await sendPasswordResetEmail(email);
    toast("Check your email for reset password");
  };
  return (
    <div className="mt-5 container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className=" p-4 border rounded shadow">
            <div>
              <p className="border-bottom d-inline pb-2">
                <Link to="/login" className="text-decoration-none">
                  <i class="fa-solid fa-arrow-left fs-4"></i>
                </Link>
              </p>
              <h3 className="text-center">Reset your password</h3>
            </div>
            <Form className="mt-4" onSubmit={handleReset}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Reset
              </Button>
              <ToastContainer />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
