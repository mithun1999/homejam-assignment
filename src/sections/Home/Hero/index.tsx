import React, { FC } from "react";
import { HeroProps } from "./Hero.types";
import { Navbar } from "./Navbar";
import { Content } from "./Content";

const Hero: FC<HeroProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="hero">
        <div className="container">
          <Navbar />
          <Content className="h-100" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
