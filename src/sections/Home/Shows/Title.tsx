import React, { FC } from "react";
import { ShowsProps } from "./Shows.types";

export const Title: FC<ShowsProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="shows-title-wrapper">
        <h2>Upcoming Shows</h2>
        <h5>
          <a href="/#">View All</a>
        </h5>
      </div>
    </div>
  );
};
