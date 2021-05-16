import React, { FC, useRef } from 'react';
import { ReviewsProps } from './Reviews.types';
import { ReviewsContent } from './ReviewContent';
import { Title } from './Title';
import SwiperCore from 'swiper';
import { NavigationOptions } from 'swiper/types/components/navigation';
import { PaginationOptions } from 'swiper/types/components/pagination';
import 'swiper/swiper.scss';

export const Reviews: FC<ReviewsProps> = ({ className }) => {
    const navPrevButton = useRef<HTMLImageElement>(null);
    const navNextButton = useRef<HTMLImageElement>(null);
    const paginationLabel = useRef<HTMLParagraphElement>(null);

    const onBeforeInit = (Swiper: SwiperCore): void => {
        const navigation = Swiper.params.navigation as NavigationOptions;
        navigation.prevEl = navPrevButton.current;
        navigation.nextEl = navNextButton.current;

        const pagination = Swiper.params.pagination as PaginationOptions;
        pagination.el = paginationLabel.current;
    };

    return (
        <div className={className}>
            <div className="hj-container">
                <Title prevRef={navPrevButton} nextRef={navNextButton} paginationRef={paginationLabel} />
            </div>
            <div className="hj-content-container">
                <ReviewsContent
                    onBeforeFunc={onBeforeInit}
                    prevRef={navPrevButton}
                    nextRef={navNextButton}
                    paginationRef={paginationLabel}
                />
            </div>
        </div>
    );
};
