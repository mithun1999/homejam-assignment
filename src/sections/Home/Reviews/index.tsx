import React, { FC } from "react";
import { ReviewsProps } from "./Reviews.types";
import { ReviewsContent } from "./ReviewsContent";
import { Title } from "./Title";

export const Reviews: FC<ReviewsProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="container">
        <Title />
        <ReviewsContent />
      </div>
    </div>
  );
};
