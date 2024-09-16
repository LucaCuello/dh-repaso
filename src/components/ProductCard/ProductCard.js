import { Component } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

class ProductCard extends Component {
  render() {
    return (
      <div className="product-card">
        <h2>{this.props.title.slice(0, 15)}...</h2>
        <p>${this.props.price}</p>
        <img
          src={this.props.thumbnail}
          alt={this.props.title}
          draggable={false}
        />
        <Link to={`/products/${this.props.id}`} className="button">
          Detalles
        </Link>
        <button
          onClick={() => this.props.deleteProduct(this.props.id)}
          style={{ marginTop: "10px" }}
        >
          Borrar producto
        </button>
      </div>
    );
  }
}

export default ProductCard;
