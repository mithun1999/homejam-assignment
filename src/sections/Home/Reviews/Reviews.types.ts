import SwiperCore from 'swiper';
import { RefObject } from 'react';

export interface ReviewsProps {
    className?: string;
}

export interface ReviewsTitleProps {
    className?: string;
    prevRef: RefObject<HTMLImageElement>;
    nextRef: RefObject<HTMLImageElement>;
    paginationRef: RefObject<HTMLParagraphElement>;
}

export interface ReviewsContentProps {
    className?: string;
    onBeforeFunc: (Swiper: SwiperCore) => void;
    prevRef: RefObject<HTMLImageElement>;
    nextRef: RefObject<HTMLImageElement>;
    paginationRef: RefObject<HTMLParagraphElement>;
}
