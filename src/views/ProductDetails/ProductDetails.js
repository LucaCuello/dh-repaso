import { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./ProductDetails.css";

export class ProductDetails extends Component {
  render() {
    return (
      <>
        {this.state.product === 0 ? (
          <p>Cargando...</p>
        ) : (
          <div className="details-card">
            <h2>title</h2>
            <span>$price</span>
            <img src={"thumbnail"} alt={""} draggable={false} />
            <p>description</p>
            <Link to="/products" className="button">
              Volver
            </Link>
          </div>
        )}
      </>
    );
  }
}

export default ProductDetails;
