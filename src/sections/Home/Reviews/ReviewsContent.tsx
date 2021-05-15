import React, { FC } from "react";
import { ReviewsCard } from "../../../components/ReviewsCard";
import { ReviewsProps } from "./Reviews.types";
import { reviewsData } from "./reviewsData";

export const ReviewsContent: FC<ReviewsProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="reviews-content-wrapper">
        {reviewsData.map((data, idx) => (
          <ReviewsCard
            key={idx}
            name={data.name}
            location={data.location}
            content={data.content}
            image={data.image}
            countryIcon={data.countryIcon}
          />
        ))}
      </div>
    </div>
  );
};
