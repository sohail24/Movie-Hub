import React, { useState, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Read the query parameter from the URL when the component mounts
  // useEffect(() => {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const query = urlParams.get('q');
  //   if (query) {
  //     setSearchTerm(query);
  //   }
  // }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //onSearch2(searchTerm);

    if(searchTerm !== ""){
      // Update the URL with the search query
      const urlParams = new URLSearchParams();
      urlParams.set('q', searchTerm);
      window.history.pushState({}, '', `/search?${urlParams.toString()}`);
      // Reload the page
      window.location.reload();
    }
  };

  // const onSearch2 = async (search) => {
  //   // const response = await fetch(
  //   //   `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${
  //   //     import.meta.env.VITE_TMDB_API_KEY
  //   //   }`)
  //   //   const data = await response.json();
  //   //   console.log(data.results)
  //     //localStorage.setItem("search_data", JSON.stringify(data));
  //     localStorage.setItem("search_query", search);
  // };



  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />
      <button type="submit" className="search-button">
        <span>🔍</span>
      </button>
    </form>
  );
};

export default SearchBar;
