import { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./ProductDetails.css";

export class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ product: data });
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        {this.state.product === 0 ? (
          <p>Cargando...</p>
        ) : (
          <div className="details-card">
            <h2>{this.state.product.title}</h2>
            <span>${this.state.product.price}</span>
            <img
              src={this.state.product.thumbnail}
              alt={this.state.product.title}
              draggable={false}
            />
            <p>{this.state.product.description}</p>
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
