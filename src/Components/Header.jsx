import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="py-3 bg-white absolute top-0 w-full text-bg">
      <nav className="container flex justify-center items-center">
        <a
          href=""
          className="flex justify-center items-center gap-4 font-Header uppercase text-2xl font-bold"
        >
          {/* <img src={logo} alt="" className=" w-[3rem]" /> */}
          ximanga
        </a>
      </nav>
    </header>
  );
};

export default Header;
