import React, { FC } from 'react';
import { ReviewsTitleProps } from './Reviews.types';
import leftIcon from '../../../assets/images/home/reviews/svg/arrowleft.svg';
import rightIcon from '../../../assets/images/home/reviews/svg/arrowright.svg';

export const Title: FC<ReviewsTitleProps> = ({ className, prevRef, nextRef, paginationRef }) => {
    return (
        <div className={className}>
            <div className="shows-title-wrapper">
                <h2>Reviews</h2>
                <div className="reviews-nav">
                    <p ref={paginationRef}>
                        {/* <span>1 </span>
            <span> / 12</span> */}
                    </p>
                    <img ref={prevRef} src={leftIcon} alt="Previous" />
                    <img ref={nextRef} src={rightIcon} alt="Next" />
                </div>
            </div>
        </div>
    );
};
