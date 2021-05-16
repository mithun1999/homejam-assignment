import React, { FC } from 'react';
import { ReviewsCard } from '../../../components/ReviewsCard';
import { ReviewsContentProps } from './Reviews.types';
import { reviewsData } from './reviewsData';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.scss';

SwiperCore.use([Navigation, Pagination]);

export const ReviewsContent: FC<ReviewsContentProps> = ({
    className,
    onBeforeFunc,
    prevRef,
    nextRef,
    paginationRef,
}) => {
    return (
        <div className={className}>
            <div className="reviews-content-wrapper">
                <Swiper
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    pagination={{
                        el: paginationRef.current,
                        type: 'fraction',
                    }}
                    onBeforeInit={onBeforeFunc}
                    spaceBetween={20}
                    slidesPerView={'auto'}
                    breakpoints={{
                        600: {
                            spaceBetween: 34,
                        },
                    }}>
                    {reviewsData.map((data, idx) => (
                        <SwiperSlide key={idx}>
                            <ReviewsCard
                                name={data.name}
                                location={data.location}
                                content={data.content}
                                image={data.image}
                                countryIcon={data.countryIcon}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};
