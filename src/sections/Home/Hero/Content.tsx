import React, { FC } from 'react';
import { HeroProps } from './Hero.types';

export const Content: FC<HeroProps> = ({ className }) => {
    return (
        <div className={className}>
            <div className="content-wrapper">
                <h1>Cari Cari</h1>
                <p>Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</p>
            </div>
        </div>
    );
};
