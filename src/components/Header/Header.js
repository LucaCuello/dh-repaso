import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <h1>Movie App</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/toprated">Top Rated movies</Link>
          </li>
          <li>
            <Link to="/popular">Popular movies</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
