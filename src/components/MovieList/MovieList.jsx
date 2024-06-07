import React, { useState, useEffect } from "react";
import _ from "lodash";

import "./MovieList.css";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";

const MovieList = ({ type, title, emoji }) => {
  //we use useEffect hook to call the api, we call it once the page is rendered and not everytime
  //for that we pass empty array to use effect
  //console.log(type, title, emoji);

  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({ by: "default", order: "desc" });

  useEffect(() => {
    fetchMovies();
  }, [type, title, emoji]);

  useEffect(() => {
    localStorage.setItem("movies_data", JSON.stringify(movies));
  }, [movies]);

  //console.log(sort);

  useEffect(() => {
    // if (sort.by !== "default") {
    //   //using lodash package
    //   const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order]);
    //   setFilterMovies(sortedMovies);
    // }
    if (sort.by !== "default") {
      const sortedMovies = filterMovies.sort((a, b) => {
        if (sort.by === "release_date") {
          return sort.order === "asc"
            ? new Date(a[sort.by]) - new Date(b[sort.by])
            : new Date(b[sort.by]) - new Date(a[sort.by]);
        } else {
          return sort.order === "asc"
            ? a[sort.by] - b[sort.by]
            : b[sort.by] - a[sort.by];
        }
      });
      setFilterMovies([...sortedMovies]);
    }
  }, [sort]);

  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`
    );

    //fetch method is used for calling an api
    //fetch mehtod returns a promise (anything which returns the output not immediateley but after some time)
    //to handle promise there are 2 ways use .then method or use await in async block
    //above is await method, below is then

    //fetch("https://api.themoviedb.org/3/movie/popular?api_key=")
    //.then(res => res.json()).then(data => console.log(data));

    const data = await response.json();
    setMovies(data.results);
    setFilterMovies(data.results);
  };

  const handleFilter = (rate) => {
    if (rate == minRating) {
      setMinRating(0);
      setFilterMovies(movies);
    } else {
      setMinRating(rate);

      const filtered = movies.filter((movie) => movie.vote_average >= rate);
      setFilterMovies(filtered);
      console.log(filtered);
    }
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };

  //console.log(sort);

  return (
    <section className="movie_list" id={type}>
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          {title} {emoji}
        </h2>
        <div className="align_center movie_list_fs">
          <FilterGroup
            minRating={minRating}
            onRatingClick={handleFilter}
            ratings={[8, 7, 6]}
          />

          <select
            name="by"
            id=""
            onChange={handleSort}
            value={sort.by}
            className="movie_sorting"
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select
            name="order"
            id=""
            onChange={handleSort}
            value={sort.order}
            className="movie_sorting"
            disabled={sort.by === "default"}
          >
            <option value="desc">
              {sort.by === "release_date" ? "Newest" : "High to Low"}
            </option>
            <option value="asc">
              {sort.by === "release_date" ? "Oldest" : "Low to High"}{" "}
            </option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {filterMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
