import React from "react";

// image
import shopImge from "../assets/images/cake/shop.png";

function Contact() {
  return (
    <div className="content-box relative list d-flex">
      <img className="w-40p" src={shopImge} alt="nunu Wheel cake" />
      <div>
        <div className="title relative">nunu Shop</div>
        <span>266 South Bridge Rd, #000, Singapore</span>
        <div className="time">
          <p>Business Day</p>
          10:00 - 18:00
        </div>
        <button>Contact us</button>
      </div>
    </div>
  );
}

export default Contact;
