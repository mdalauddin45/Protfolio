import React from "react";
import About from "./Home/About/About";
import HeaderSection from "./Home/HeaderSection/HeaderSection";
import Works from "./Home/Works/Works";

function Home() {
  return (
    <div>
      <HeaderSection />
      <About />
      <Works />
    </div>
  );
}

export default Home;
