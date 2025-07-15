import React from "react";
import IG from "../assets/images/instagram.png";

function Footer() {
  return (
    <footer className="z-10">
      <div>
        <a href="javascript:void(0)">Cookies Policy</a>
        <a href="javascript:void(0)">Privacy Policy</a>
      </div>
      <a href="javascript:void(0)">
        <img src={IG} alt="instagram" />
      </a>
      <p>&copy; 2025 nunu. All right reserved</p>
    </footer>
  );
}

export default Footer;
