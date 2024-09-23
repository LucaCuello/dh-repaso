import React, { Component } from "react";
import { options } from "../../options";
import MovieGrid from "../MovieGrid/MovieGrid";

export class HomeMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch(this.props.url, options)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ movies: data.results.slice(0, 5) });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        {this.state.movies.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          <MovieGrid movies={this.state.movies} />
        )}
      </>
    );
  }
}

export default HomeMovies;
