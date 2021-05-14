import React from "react";
import Hero from "./sections/Home/Hero";
import { Shows } from "./sections/Home/Shows";

function App() {
  return (
    <>
      <Hero className="hero-main-wrapper" />
      <Shows className="shows-main-wrapper" />
    </>
  );
}

export default App;
