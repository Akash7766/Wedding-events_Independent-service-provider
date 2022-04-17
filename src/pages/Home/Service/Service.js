import React from "react";

const Service = ({ service }) => {
  const { name, price, img, description } = service;
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
        <button className="btn btn-primary">Checkout</button>
      </div>
    </div>
  );
};

export default Service;
