import React, { Component } from "react";
import "./MovieCard.css";

export class MovieCard extends Component {
  constructor() {
    super();
    this.state = {
      showDetail: false,
    };
  }

  toggleShowDetail() {
    this.setState({ showDetail: !this.state.showDetail });
  }

  render() {
    return (
      <div className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w500${this.props.poster_path}`}
          alt={this.props.title}
          draggable="false"
        />
        <h3>{this.props.title}</h3>
        {this.state.showDetail && (
          <p>Fecha de lanzamiento: {this.props.overview}</p>
        )}
        <div className="buttons-container">
          <button
            className="button button-primary"
            onClick={() => this.toggleShowDetail()}
          >
            {this.state.showDetail ? "Ocultar descripción" : "Ver descripción"}
          </button>
          <button className="button button-secondary">Ir a detalle</button>
        </div>
      </div>
    );
  }
}

export default MovieCard;
