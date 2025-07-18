import React from "react";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <header className="sticky top-0 left-0 z-10 flex justify-between items-center w-full h-[80px] px-[40px] py-[20px] backdrop-blur-md">
      <a href="#">
        <img
          src={logo}
          alt="nunu logo"
          className="object-cover w-[180px] h-full"
        />
      </a>
      <nav className="flex justify-center items-center">
        <a className="pr-2 mr-2 border-r border-r-dark" href="#">
          EN
        </a>
        <a href="#">CH</a>
      </nav>
    </header>
  );
}

export default Header;
