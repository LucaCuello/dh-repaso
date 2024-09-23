import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieGrid.css";

const MovieGrid = ({ movies }) => {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id + Math.random()}
          title={movie.title}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
          overview={movie.overview}
        />
      ))}
    </div>
  );
};

export default MovieGrid;
