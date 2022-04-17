import React from "react";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <div className="text-center py-4 border-top">
      <h5>copyright &copy; {year}</h5>
    </div>
  );
};

export default Footer;
