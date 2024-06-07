import React, { useEffect, useState } from "react";
import "./Navbar.css";
import DarkMode from "../DarkMode/DarkMode";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ isHomePage }) => {
  return (
    <nav className={`navbar sticky`}>
      <h1>movie hub</h1>
      <div className="navbar_links">
        <DarkMode />
        {isHomePage ? (
          <>
            <NavLink to="/">Popular 🔥</NavLink>
            <NavLink to="/top_rated">Top Rated 🌟</NavLink>
            <NavLink to="/upcoming">Upcoming 🎇</NavLink>
          </>
        ) : (
          <>
            <Link to={"/"}>
              <span style={{ fontSize: 30 }}>🔙</span>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
