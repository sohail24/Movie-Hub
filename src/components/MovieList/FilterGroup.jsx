import React from "react";

const FilterGroup = ({ minRating, onRatingClick, ratings }) => {
  return (
    <ul className="align_center movie_filter">
      {ratings.map((rate) => {
        return (
          <li
            className={
              minRating === rate
                ? "movie_filter_item active"
                : "movie_filter_item"
            }
            key={rate}
            onClick={() => onRatingClick(rate)}
          >
            {rate}+ Rate
          </li>
        );
      })}
      {/* <li className="movie_filter_item active" onClick={() => onRatingClick(8)}>
        8+ Rate
      </li> */}
    </ul>
  );
};

export default FilterGroup;
