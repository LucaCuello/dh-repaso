import React, { Component } from "react";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import { options } from "../../options";

export class Popular extends Component {
  constructor() {
    super();
    this.state = {
      popularMovies: [],
      page: 1,
      loading: false,
      searchQuery: "",
    };
  }

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies = () => {
    this.setState({ loading: true });

    fetch(
      `https://api.themoviedb.org/3/movie/popular?page=${this.state.page}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState((prevState) => ({
          popularMovies: [...prevState.popularMovies, ...data.results],
          page: prevState.page + 1,
          loading: false,
        }));
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  };

  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  filterMovies = () => {
    if (this.state.searchQuery === "") {
      return this.state.popularMovies;
    }

    return this.state.popularMovies.filter((movie) =>
      movie.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    );
  };

  render() {
    return (
      <div className="movies-container">
        <div className="title-container">
          <h2>Popular movies</h2>
          <input
            type="text"
            placeholder="Filtrar películas..."
            value={this.state.searchQuery}
            onChange={this.handleSearchChange}
          />
        </div>
        {this.state.popularMovies.length === 0 && !this.state.loading ? (
          <p>Cargando...</p>
        ) : (
          <MovieGrid movies={this.filterMovies()} />
        )}
        {this.state.loading ? (
          <p>Cargando más películas...</p>
        ) : (
          <button className="button button-primary" onClick={this.loadMovies}>
            Cargar más
          </button>
        )}
      </div>
    );
  }
}

export default Popular;
