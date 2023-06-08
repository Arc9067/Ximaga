import React from "react";
import Logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section className="pt-[150px] pb-[80px] w-full bg-rd-700">
      <div className="container grid gap-14 text-center items-center justify-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl md:text-5xl leading-relaxed font-Header font-bold uppercase">
            welcome to ximanga
          </h1>
          <p className="font-secondary max-w-[700px] mx-auto">
            Ximanga is an innovative cryptocurrency project built on the
            Ethereum blockchain, aiming to provide users with a seamless and
            tax-free digital currency experience.
          </p>

          <div className="flex justify-center md:justify-center flex-wrap items-center gap-5">
            <a
              href="https://t.me/XiMangagateway"
              className="font-Header bg-white text-bg px-6 py-4 rounded-2xl text-xs"
            >
              telegram
            </a>
            <a
              href="https://twitter.com/XiMangaERC"
              target="_blank"
              className="font-Header bg-white text-bg px-6 py-4 rounded-2xl text-xs"
            >
              twitter
            </a>
            <a
              href=""
              className="font-Header bg-white text-bg px-6 py-4 rounded-2xl text-xs"
            >
              uniswap
            </a>
          </div>
        </div>
        <img src={Logo} alt="" className="mx-auto w-[15rem] special" />
      </div>
    </section>
  );
};

export default Hero;
