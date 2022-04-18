import React from "react";
import { Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.name.value = "";
    event.target.email.value = "";
    event.target.text.value = "";
    toast("Thaks for sending a message.");
  };
  return (
    <div className="container py-5">
      <h2 className="my-5 text-center">Rech Me Out</h2>
      <div className="row g-5">
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <div className="mb-3">
            <h4>Email Address:</h4>
            <h6>mraakash01932@gmail.com</h6>
          </div>
          <div className="mb-3">
            <h4>Location:</h4>
            <h6>Kazi Motahar Hossen Hall, DPI</h6>
            <h6>Dhaka -1208</h6>
          </div>
          <div>
            <h4>Contact Number:</h4>
            <h6>01712-xxxxxx</h6>
          </div>
        </div>
        <div className="col-md-6">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Your name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                name="name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your Email"
                name="email"
                required
              />
            </Form.Group>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Your Messages
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="type here"
                name="text"
                required
              ></textarea>
            </div>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
