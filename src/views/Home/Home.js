import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import HomeMovies from "../../components/HomeMovies/HomeMovies";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-movies">
      <div className="movies-container">
        <h2>Popular movies</h2>
        <HomeMovies
          url="https://api.themoviedb.org/3/movie/popular
"
        />
        <Link to="/popular" className="button button-primary show-all">
          Ver todas
        </Link>
      </div>
      <div className="movies-container">
        <h2>Top rated movies</h2>
        <HomeMovies url="https://api.themoviedb.org/3/movie/top_rated" />
        <Link to="/toprated" className="button button-primary show-all">
          Ver todas
        </Link>
      </div>
    </div>
  );
};

export default Home;
