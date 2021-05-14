import React, { FC, useState } from "react";
import { ShowsCardProps } from "./ShowsCard.types";
import arrowIcon from "../../assets/images/home/shows/svg/arrowright.svg";
import saveIcon from "../../assets/images/home/shows/svg/save.svg";
import savedIcon from "../../assets/images/home/shows/svg/saved.svg";

export const ShowsCard: FC<ShowsCardProps> = ({
  className,
  image,
  tag,
  name,
}) => {
  const [save, setSave] = useState(false);
  const handleSave = () => {
    setSave((prev) => !prev);
  };
  return (
    <div className={className}>
      <div className="shows-card-wrapper">
        <div className="shows-card">
          <img className="shows-card-img" src={image} />
          <div className="info">
            <span className="tag">{tag}</span>
            <div className="name">{name}</div>
            <div className="utils">
              <div className="more">
                More Info
                <img src={arrowIcon} alt="Next" />
              </div>
              <div className="book">
                {save ? (
                  <img src={savedIcon} alt="Save" onClick={handleSave} />
                ) : (
                  <img src={saveIcon} alt="Save" onClick={handleSave} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
