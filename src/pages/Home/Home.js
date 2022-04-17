import React from "react";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Services from "./Services/Services";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
