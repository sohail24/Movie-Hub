import React, { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import MovieList from "../components/MovieList/MovieList";
import Footer from "../components/Footer/Footer";
import { set } from "lodash";

const Home = ({ isHomePage, type, title, emoji }) => {
  //const [searchQuery, setSearchQuery] = useState("")
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get('q');
  console.log(searchQuery)

  return (
    <div>
      <Navbar isHomePage={isHomePage} />
      <main id="main-content">
        <MovieList type={type} title={title} emoji={emoji} searchQuery={searchQuery}/>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
