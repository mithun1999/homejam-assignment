import React, { FC } from 'react';
import { ProgressBar } from '../../../components/ProgressBar';
import { HeroProps } from './Hero.types';
import { statsData } from './statsData';

export const Stats: FC<HeroProps> = ({ className }) => {
    return (
        <div className={className}>
            <div className="stats-wrapper w-100">
                <div className="stats-container w-100">
                    {statsData.map((data, idx) => (
                        <ProgressBar
                            key={idx}
                            icon={data.icon}
                            label={data.label}
                            percent={data.percent}
                            value={data.value}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
