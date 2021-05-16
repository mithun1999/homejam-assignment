import React, { FC } from 'react';
import { HeroProps } from '../Hero/Hero.types';
import { Title } from './Title';
import { ShowsContent } from './ShowsContent';

export const Shows: FC<HeroProps> = ({ className }) => {
    return (
        <div className={className}>
            <div className="hj-container">
                <Title />
            </div>
            <div className="hj-content-container">
                <ShowsContent />
            </div>
        </div>
    );
};
