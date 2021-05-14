import React, { FC } from "react";
// Import react-circular-progressbar module and styles
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ProgressBarProps } from "./ProgressBar.types";

export const ProgressBar: FC<ProgressBarProps> = ({
  className,
  value,
  percent,
  label,
  icon,
}) => {
  return (
    <div className={className}>
      <div className="progressbar-wrapper">
        <CircularProgressbarWithChildren
          value={percent}
          strokeWidth={1}
          styles={buildStyles({
            pathColor: "#DD4CAC",
            trailColor: "rgba(255,255,255,0.2)",
          })}
        >
          <div className="progressbar-content">
            <img src={icon} alt="Like" />
            <p className="stats-number">{value}</p>
            <p className="stats-label">{label}</p>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};
