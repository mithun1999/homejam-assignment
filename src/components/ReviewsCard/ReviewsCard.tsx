import React, { FC } from 'react';
import { ReviewsCardProps } from './ReviewsCard.types';

export const ReviewsCard: FC<ReviewsCardProps> = ({ className, name, location, content, image, countryIcon }) => {
    return (
        <div className={className}>
            <div className="reviews-card-wrapper">
                <div className="reviews-card">
                    <div className="info">
                        <img className="review-img" src={image} alt="User" />
                        <div className="info-group">
                            <div className="name">{name}</div>
                            <div className="location">
                                <img src={countryIcon} alt="Country" />
                                &nbsp;&nbsp;&nbsp;
                                {location}
                            </div>
                        </div>
                    </div>
                    <div className="content">{content}</div>
                </div>
                <div className="reviews-card-background" />
            </div>
        </div>
    );
};
