import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import "./MoviePage.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const MoviePage = () => {
  // const location = useLocation();
  // // Access the movie data passed through the Link component
  // console.log(location);
  const { movie_id } = useParams();
  const moviesData = JSON.parse(localStorage.getItem("movies_data")); // getting movies object array

  const movieData = moviesData.find((movie) => movie.id == movie_id);
  //console.log("movieData", movieData);

  //work in progress ..
  // const fetchMovieDataById = async (movie_id) =>                                {
  //   const res = await fetch(
  //     `https://api.themoviedb.org/3/find/${movie_id}?api_key=fa2f94a45134bb95a28288756d007e91 `
  //   );
  //   const movieData = await res.json();
  //   console.log(movieData);
  // };

  // useEffect(() => {
  //   fetchMovieDataById(movie_id);
  // }, []);
  const backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original${movieData.backdrop_path})`;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Navbar isHomePage={false} />
      <div
        className="container"
        style={{
          backgroundImage: backgroundImage,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <div className="poster">
          <img
            src={`https://image.tmdb.org/t/p/w1280${movieData.poster_path}`}
            alt="movie_poster"
            className="movie_poster"
          />
        </div>
        <div className="poster_details">
          <div className="data">
            <h3>Adult: {movieData.adult ? "Yes" : "No"}</h3>
            <h3>Id: {movieData.id}</h3>
            <h3>Original Language: {movieData.original_language}</h3>
            <h2>Title : {movieData.title}</h2>
            <p>
              <b>Overview:</b> {movieData.overview}
            </p>
            <h4>Popularity: {movieData.popularity}</h4>
            <h4>Release Date: {movieData.release_date}</h4>
            <h4>Vote average: {movieData.vote_average} ⭐</h4>
            <h4>Rated by: {movieData.vote_count} people</h4>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MoviePage;
