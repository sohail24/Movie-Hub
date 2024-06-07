import React from "react";
import "./MovieCard.css";
import { Link, json } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <>
      {/* {console.log(movie)} */}
      <Link to={`/movie/${movie.id}`} state={movie} className="movie_card">
        {/* <a
        href={`https://www.themoviedb.org/movie/${movie.id}`}
        target="_blank"
        className="movie_card"  
      > */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="movie_poster"
          className="movie_poster"
        />
        <div className="movie_details">
          <h3 className="movie_details_heading">{movie.original_title}</h3>
          <div className="align_center movie_date_rate">
            <p>{movie.release_date}</p>
            <p>{movie.vote_average} ⭐</p>
          </div>
          <p className="movie_description">
            {movie.overview.slice(0, 100) + "..."}
          </p>
        </div>
        {/* </a> */}
      </Link>
    </>
  );
};

export default MovieCard;
