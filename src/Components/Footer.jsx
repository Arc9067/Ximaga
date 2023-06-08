import React from "react";

const Footer = () => {
  return (
    <footer className="py-[20px] w-full">
      <div className="container flex justify-center items-center flex-col gap-5">
        <div className="w-full h-1 border-t"></div>

        <p className="font-secondary capitalize font-bold">
          © 2023 ximanga All Right Reserved{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
