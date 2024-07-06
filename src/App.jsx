import React from "react";
import { useParams, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import NotFound from "./components/NotFound/NotFound";
import MoviePage from "./components/MovieList/MoviePage";
import SearchPage from "./Pages/SearchPage";

const App = () => {
  // const { id } = useParams();
  // console.log("params", id);
  return (
    <div className="app">
      <main className="app_main">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isHomePage={true}
                type={"popular"}
                title={"Popular"}
                emoji={"🔥"}
              />
            }
          />
          <Route
            path="/top_rated"
            element={
              <Home
                isHomePage={true}
                type={"top_rated"}
                title={"Top Rated"}
                emoji={"🌟"}
              />
            }
          />
          <Route
            path="/upcoming"
            element={
              <Home
                isHomePage={true}
                type={"upcoming"}
                title={"Upcoming"}
                emoji={"🎇"}
              />
            }
          />
          <Route path="/movie/:movie_id" element={<MoviePage />} />
          <Route path="/search" element={<Home
                isHomePage={true}
                type={"upcoming"}
                title={"Upcoming"}
                emoji={"🎇"}
              />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
