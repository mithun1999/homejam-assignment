import React, { FC } from 'react';
import { ShowsCard } from '../../../components/ShowsCard';
import { ShowsProps } from './Shows.types';
import { showsData } from './showsData';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ShowsContent: FC<ShowsProps> = ({ className }) => {
    return (
        <div className={className}>
            <div className="shows-content-wrapper">
                <Swiper
                    spaceBetween={24}
                    slidesPerView={'auto'}
                    breakpoints={{
                        600: {
                            spaceBetween: 40,
                        },
                    }}>
                    {showsData.map((data, idx) => (
                        <SwiperSlide key={idx}>
                            <ShowsCard key={idx} name={data.name} tag={data.tag} image={data.image} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};
