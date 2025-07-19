import React from "react";

// image
import shopImge from "../assets/images/cake/shop.png";

function Contact() {
  return (
    <div className="relative  text-center px-[120px] py-0 mb-[80px] flex items-center justify-center gap-8">
      <img className="w-4/12" src={shopImge} alt="nunu Wheel cake" />
      <div className="text-left text-base">
        <div className="text-md font-bold border-b-[1px] my-4 border-dark">
          nunu Shop
        </div>
        <span className="text-base">266 South Bridge Rd, #000, Singapore</span>
        <div className="time font-semibold my-4 ">
          <p className="text-sm my-2 ">Business Day</p>
          10:00 - 18:00
        </div>
        <button className="flex justify-center items-center gap-2 bg-white px-2.5 py-1.5 rounded-full text-sm my-4">
          Contact us
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
              stroke="#000"
              stroke-width="2"
            />
            <path d="M22 6L12 13L2 6" stroke="#000" stroke-width="2" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Contact;
