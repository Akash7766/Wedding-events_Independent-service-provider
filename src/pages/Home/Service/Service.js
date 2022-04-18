import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { name, price, img, description } = service;

  const navigate = useNavigate();
  const navigateToCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div className="col">
      <div className="card h-100 shadow">
        <img
          src={img}
          className="card-img-top w-75 mx-auto d-block"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h5 className="card-title">{price}$</h5>
          <p className="card-text">{description}</p>
        </div>
        <button onClick={navigateToCheckout} className="btn btn-primary">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Service;
