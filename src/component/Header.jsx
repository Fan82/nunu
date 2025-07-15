import React from "react";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <header className="z-10">
      <a href="#">
        <img src={logo} alt="nunu logo" />
      </a>
      <nav>
        <a href="javascript:void(0)">EN</a>
        <a href="javascript:void(0)">CH</a>
      </nav>
    </header>
  );
}

export default Header;
