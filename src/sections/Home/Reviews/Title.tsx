import React, { FC } from "react";
import { ReviewsProps } from "./Reviews.types";
import leftIcon from "../../../assets/images/home/reviews/svg/arrowleft.svg";
import rightIcon from "../../../assets/images/home/reviews/svg/arrowright.svg";

export const Title: FC<ReviewsProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="shows-title-wrapper">
        <h2>Reviews</h2>
        {/* <h5>
          <a href="/#">View All</a>
        </h5> */}
        <div className="reviews-nav">
          <p>
            <span>1 </span>
            <span> / 12</span>
          </p>
          <img src={leftIcon} alt="Previous" />
          <img src={rightIcon} alt="Next" />
        </div>
      </div>
    </div>
  );
};
