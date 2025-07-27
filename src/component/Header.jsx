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
      <div className="flex justify-center items-end my-4 gap-2 md:gap-7">
        <a
          href="javascript:void(0)"
          className="md:scale-125 hover:scale-150 hover:object-scale-down"
        >
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
        <a
          href="javascript:void(0)"
          className="md:scale-125 hover:scale-150 hover:object-scale-down"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M304 96h48a8 8 0 0 1 8 8v64a8 8 0 0 1-8 8h-48v64h48a8 8 0 0 1 8 8v64a8 8 0 0 1-8 8h-48v128a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8V312h-48a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h48v-64a80 80 0 0 1 80-80Z"
              stroke="#000"
              stroke-width="32"
              stroke-linejoin="round"
              fill="none"
            />
          </svg>
        </a>
        <a
          href="javascript:void(0)"
          className="md:scale-125 hover:scale-150 hover:object-scale-down"
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M459 151.7c.3 4.3.3 8.7.3 13 0 132.2-100.6 284.5-284.5 284.5A282.8 282.8 0 0 1 32 408a207 207 0 0 0 25.1 1.5 199.8 199.8 0 0 0 123.6-42.6 99.8 99.8 0 0 1-93.2-69 126 126 0 0 0 18.8 1.5 105.4 105.4 0 0 0 26.1-3.4 99.7 99.7 0 0 1-79.9-97.8v-1.3a100 100 0 0 0 45.2 12.4 99.8 99.8 0 0 1-30.8-133.2 283.1 283.1 0 0 0 205.4 104.1 112.6 112.6 0 0 1-2.4-22.8 99.8 99.8 0 0 1 172.4-68.2 197.5 197.5 0 0 0 63.3-24.2 99.5 99.5 0 0 1-43.9 55 199 199 0 0 0 57.3-15.6 209.2 209.2 0 0 1-49.8 51.7Z"
              stroke="#000"
              stroke-width="32"
              stroke-linejoin="round"
              fill="none"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}

export default Header;
