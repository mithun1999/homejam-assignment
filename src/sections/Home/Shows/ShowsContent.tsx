import React, { FC } from 'react';
import { ShowsCard } from '../../../components/ShowsCard';
import { ShowsProps } from './Shows.types';
import { showsData } from './showsData';

export const ShowsContent: FC<ShowsProps> = ({ className }) => {
    return (
        <div className={className}>
            <div className="shows-content-wrapper">
                {showsData.map((data, idx) =>
                    showsData.length - 1 === idx ? (
                        <ShowsCard
                            className="showscard-last"
                            key={idx}
                            name={data.name}
                            tag={data.tag}
                            image={data.image}
                        />
                    ) : (
                        <ShowsCard key={idx} name={data.name} tag={data.tag} image={data.image} />
                    )
                )}
            </div>
        </div>
    );
};
