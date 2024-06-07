import React from "react";

import Navbar from "../components/Navbar/Navbar";
import MovieList from "../components/MovieList/MovieList";
import Footer from "../components/Footer/Footer";

const Home = ({ isHomePage, type, title, emoji }) => {
  return (
    <div>
      <Navbar isHomePage={isHomePage} />
      <main id="main-content">
        <MovieList type={type} title={title} emoji={emoji} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
