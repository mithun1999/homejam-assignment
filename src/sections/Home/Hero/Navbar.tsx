import React, { FC } from "react";
import { HeroProps } from "./Hero.types";
import logo from "../../../assets/images/home/hero/png/homejam-logo.png";
import searchIcon from "../../../assets/images/home/hero/svg/search.svg";
import basketIcon from "../../../assets/images/home/hero/svg/basket.svg";
import menuIcon from "../../../assets/images/home/hero/svg/hamburger.svg";

export const Navbar: FC<HeroProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="navbar-wrapper">
        <div className="left">
          <img src={logo} alt="HomeJam Logo" />
        </div>
        <div className="right">
          <div className="right-wrapper desktop">
            <p className="search-wrapper">
              <img src={searchIcon} alt="Search" />
              <span className="search-text">Search</span>
            </p>
            <p>Help</p>
            <p>Account</p>
            <p>
              <img src={basketIcon} alt="Cart" />
            </p>
          </div>
          <div className="right-wrapper mobile">
            <img src={searchIcon} alt="Search" />
            <img src={basketIcon} alt="Basket" />
            <img src={menuIcon} alt="Menu" />
          </div>
        </div>
      </div>
    </div>
  );
};
