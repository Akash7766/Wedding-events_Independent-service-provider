import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Reset = () => {
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
            <Form className="mt-4">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>

              <Button variant="primary" type="submit">
                Reset
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
