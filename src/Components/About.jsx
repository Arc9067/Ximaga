import React from "react";
import Logo from "../assets/logo.png";

const About = () => {
  return (
    <section className="py-[50px] w-full ">
      <div className="container grid gap-14 text-center items-center justify-center">
        <div className="flex flex-col gap-6 text-center">
          <h1 className="text-3xl md:text-5xl leading-relaxed font-Header font-bold uppercase">
            about ximanga
          </h1>
          <p className="font-secondary max-w-[700px] mx-auto">
            Ximanga is an innovative cryptocurrency project built on the
            Ethereum blockchain, aiming to provide users with a seamless and
            tax-free digital currency experience. By leveraging the power of
            blockchain technology, Ximanga offers a unique ecosystem that allows
            for secure and efficient transactions while eliminating the
            burdensome tax implications often associated with traditional
            financial systems.
          </p>
          <p className="font-secondary max-w-[700px] mx-auto">
            At its core, Ximanga harnesses the decentralized nature of Ethereum
            to create a transparent and trustless platform. By utilizing smart
            contracts, Ximanga ensures that every transaction is recorded on the
            blockchain, providing an immutable ledger accessible to all
            participants. This not only guarantees the integrity of the network
            but also eliminates the need for intermediaries, reducing costs and
            enhancing efficiency.
          </p>

          <div className="flex justify-center md:justify-center flex-wrap items-center gap-5">
            <a
              href=""
              className="font-Header bg-transparent border border-white text-white px-6 py-4 rounded-2xl text-xs"
            >
              ape now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
