import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const handleOrder = (event) => {
    event.preventDefault();
    toast("Thanks for order");
    event.target.name.value = "";
    event.target.email.value = "";
    event.target.address.value = "";
    event.target.number.value = "";
  };
  return (
    <div className="mt-5 container">
      <h2 className="text-center mb-4">Please checkout</h2>
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className=" p-4 border rounded shadow">
            <Form onSubmit={handleOrder}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
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
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Present address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter address"
                  name="address"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Phone number"
                  name="number"
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Place order
              </Button>
            </Form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
