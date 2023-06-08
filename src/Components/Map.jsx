import React from "react";
import { Chrono } from "react-chrono";

const Map = () => {
  return (
    <section className="py-[50px] w-full bg-bg text-white">
      <div className="container flex flex-col gap-14 text-center items-center justify-center">
        <h1 className="text-3xl md:text-4xl leading-relaxed font-Header font-bold uppercase">
          $ximanga map
        </h1>

        <div className="grid w-full grid-cols-1 lg:grid-cols-3 justify-between items-center gap-10">
          <article className="h-[300px] border font-Header rounded-2xl p-4 text-start justify-center flex flex-col gap-2">
            <h2 className="font-Header">phase 1</h2>
            <ul className="list-disc mt-6 flex flex-col gap-2 list-inside text-xs">
              <li>website launch</li>
              <li>ximanga launch</li>
              <li>1k+ tg members</li>
              <li>lp burned</li>
              <li>meme contest</li>
              <li>ownership renounce</li>
            </ul>
          </article>
          <article className="h-[300px] border font-Header rounded-2xl p-4 text-start justify-center flex flex-col gap-2">
            <h2 className="font-Header">phase two</h2>
            <ul className="list-disc mt-6 flex flex-col gap-2 list-inside text-xs">
              <li>heavy marketing</li>
              <li>coingecko listing </li>
              <li>Trending on Twitter</li>
              <li>ETH Trending on tg</li>
            </ul>
          </article>
          <article className="h-[300px] border font-Header rounded-2xl p-4 text-start justify-center flex flex-col gap-2">
            <h2 className="font-Header">phase three</h2>
            <ul className="list-disc mt-6 flex flex-col gap-2 list-inside text-xs">
              <li>Continued KOL Marketing</li>
              <li>Applied CEX Listings</li>
              <li>heavy marketing</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Map;
