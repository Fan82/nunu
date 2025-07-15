import React from "react";

function Footer() {
  return (
    <footer className="z-10">
      <div>
        <a href="javascript:void(0)">Cookies Policy</a>
        <a href="javascript:void(0)">Privacy Policy</a>
      </div>
      <a href="javascript:void(0)">
        <svg
          width="24"
          height="24"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="64"
            y="64"
            width="384"
            height="384"
            rx="80"
            stroke="#000"
            stroke-width="32"
            fill="none"
          />
          <circle cx="256" cy="256" r="80" stroke="#000" stroke-width="32" />
          <circle cx="352" cy="160" r="16" fill="#000" />
        </svg>
      </a>
      <p>&copy; 2025 nunu. All right reserved</p>
    </footer>
  );
}

export default Footer;
