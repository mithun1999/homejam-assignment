import SwiperCore from 'swiper';

export interface ReviewsProps {
    className?: string;
}

export interface ReviewsTitleProps {
    className?: string;
    prevRef?: any;
    nextRef?: any;
    paginationRef?: any;
}

export interface ReviewsContentProps {
    className?: string;
    onBeforeFunc?: (Swiper: SwiperCore) => void;
    prevRef?: any;
    nextRef?: any;
    paginationRef?: any;
}
