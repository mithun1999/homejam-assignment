import React, { FC } from 'react';
import Hero from './sections/Home/Hero';
import { Reviews } from './sections/Home/Reviews';
import { Shows } from './sections/Home/Shows';

const Home: FC = () => {
    return (
        <>
            <Hero className="hero-main-wrapper" />
            <Shows className="shows-main-wrapper" />
            <Reviews className="reviews-main-wrapper" />
        </>
    );
};

export default Home;
