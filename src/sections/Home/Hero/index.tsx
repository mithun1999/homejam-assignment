import React, { FC } from 'react';
import { HeroProps } from './Hero.types';
import { Navbar } from './Navbar';
import { Content } from './Content';
import { Stats } from './Stats';

const Hero: FC<HeroProps> = ({ className }) => {
    return (
        <div className={className}>
            <div className="hero">
                <div className="hj-container">
                    <Navbar />
                    <Content className="h-100" />
                </div>
            </div>
            <div className="hj-content-container">
                <Stats />
            </div>
        </div>
    );
};

export default Hero;
