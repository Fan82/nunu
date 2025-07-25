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
    </header>
  );
}

export default Header;
