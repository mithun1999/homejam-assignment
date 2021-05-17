import { FC } from 'react';
import { ProgressBar } from '../../../components/ProgressBar';
import { HeroProps } from './Hero.types';
import { statsData } from './statsData';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Stats: FC<HeroProps> = ({ className }) => {
    return (
        <div className={className}>
            <div className="stats-wrapper w-100">
                <div className="stats-container w-100">
                    <Swiper spaceBetween={20} slidesPerView={'auto'}>
                        {statsData.map((data, idx) => (
                            <SwiperSlide key={idx}>
                                <ProgressBar
                                    key={idx}
                                    icon={data.icon}
                                    label={data.label}
                                    percent={data.percent}
                                    value={data.value}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};
