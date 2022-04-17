import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../../images/slider1.jpg";
import img2 from "../../../images/slider2.jpg";
import img3 from "../../../images/slider3.jpg";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
        <Carousel.Caption>
          <h3 className="fw-bold">Made With Love</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" />

        <Carousel.Caption>
          <h3 className="fw-bold">Made For You</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />

        <Carousel.Caption>
          <h3 className="fw-bold">Made For Shine</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
