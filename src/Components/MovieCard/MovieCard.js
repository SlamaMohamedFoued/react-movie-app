import React from "react";
import Rating from "../Rating/Rating";
import "./MovieCard.css";
import StarRatingComponent from "react-star-rating-component";

const MovieCard = ({ list }) => {
  return (
    <div className="movie-card">
      <div className="movie-rating">
        <StarRatingComponent name="rate1" starCount={5} value={list.rating} />
      </div>
      <div
        className="movie-image"
        style={{
          backgroundImage: `url('${list.image}')`
        }}
      />
      <div className="movie-description">
        {list.name} - {list.year}
      </div>
    </div>
  );
};

export default MovieCard;
