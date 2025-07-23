import React from "react";

// image
import shopImge from "../assets/images/cake/shop.png";

function Contact() {
  return (
    <div className="relative  text-center py-0 px-[40px] mb-[80px] flex items-center justify-center gap-8 flex-col md:px-[120px] md:flex-row">
      <img className="w-auto md:w-96" src={shopImge} alt="nunu Wheel cake" />
      <div className="text-left text-base ">
        <div className="text-md font-bold my-4 md:text-base">nunu Shop</div>
        <span className="text-base">266 South Bridge Rd, #000, Singapore</span>
        <div className="time font-semibold my-4  ">10:00 - 18:00</div>
      </div>
    </div>
  );
}

export default Contact;
