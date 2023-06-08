import React from "react";
import Logo from "../assets/logo.png";

const Mics = () => {
  return (
    <section className="py-[50px] w-full bg-white text-bg">
      <div className="container grid lg:grid-cols-2 gap-14 items-center justify-center">
        <img src={Logo} alt="" className="mx-auto w-[15rem] special" />
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl leading-relaxed font-Header font-bold uppercase">
            ximanga tokenomics
          </h1>

          <div className="grid justify-between mt-10 items-center gap-8">
            <article className="flex items-center gap-2 font-Header ">
              <div className="h-7 w-7 bg-bg"></div>
              <h1 className="flex gap-3">
                launch <p>stealth</p>
              </h1>
            </article>
            <article className="flex items-center gap-2 font-Header ">
              <div className="h-7 w-7 bg-bg"></div>
              <h1 className="flex gap-3">
                1b <p>supply</p>
              </h1>
            </article>
            <article className="flex items-center gap-2 font-Header ">
              <div className="h-7 w-7 bg-bg"></div>
              <h1 className="flex gap-3">
                two% <p>max wallet</p>
              </h1>
            </article>
            <article className="flex items-center gap-2 font-Header ">
              <div className="h-7 w-7 bg-bg"></div>
              <h1 className="flex gap-3">
                zero <p>tax</p>
              </h1>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mics;
