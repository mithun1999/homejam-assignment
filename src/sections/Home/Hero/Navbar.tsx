import React, { FC, useState } from 'react';
import { HeroProps } from './Hero.types';
import logo from '../../../assets/images/home/hero/png/homejam-logo.png';
import searchIcon from '../../../assets/images/home/hero/svg/search.svg';
import basketIcon from '../../../assets/images/home/hero/svg/basket.svg';
import menuIcon from '../../../assets/images/home/hero/svg/hamburger.svg';
import closeIcon from '../../../assets/images/home/hero/svg/closebtn.svg';

export const Navbar: FC<HeroProps> = ({ className }) => {
    const [navOpen, setNavOpen] = useState(false);

    const handleMobileNavOpen = () => {
        setNavOpen(true);
    };

    const handleMobileNavClose = () => {
        setNavOpen(false);
    };

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
                        <img onClick={handleMobileNavOpen} src={menuIcon} alt="Menu" />
                    </div>
                </div>
                {navOpen && (
                    <div className="navbar-mobile-container">
                        <div className="navbar-mobile-wrapper">
                            <div onClick={handleMobileNavClose} className="close-btn">
                                <img src={closeIcon} alt="" />
                            </div>
                            <div className="navbar-mobile-content">
                                <p>
                                    <a href="/#">Help</a>
                                </p>
                                <p>
                                    <a href="/#">Account</a>
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
