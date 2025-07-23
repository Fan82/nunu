import React from "react";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <header className="sticky top-0 left-0 z-10 flex justify-between items-center w-full h-20 px-4 py-2 backdrop-blur-md">
      <a href="#">
        <img
          src={logo}
          alt="nunu logo"
          className="object-cover w-[180px] h-full"
        />
      </a>
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
    </header>
  );
}

export default Header;
