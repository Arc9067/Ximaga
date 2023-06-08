import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Mics from "./Components/Mics";
import Map from "./Components/Map";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="min-h-screen w-full font-primar bg-bg text-white">
      <Header />
      <Hero />
      <About />
      <Mics />
      <Map />
      <Footer />
    </div>
  );
};

export default App;
