import { Component } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

class ProductCard extends Component {
  render() {
    return (
      <div className="product-card">
        <h2>NOMBRE</h2>
        <p>$PRECIO</p>
        {/* <img
          src={IMAGEN}
          alt={IMAGEN}
          draggable={false}
        /> */}
        <Link to={`ID`} className="button">
          Detalles
        </Link>
        <button onClick={`FUNCION`} style={{ marginTop: "10px" }}>
          Borrar producto
        </button>
      </div>
    );
  }
}

export default ProductCard;
