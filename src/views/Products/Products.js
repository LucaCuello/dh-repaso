import { Component } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Products.css";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ products: data.products });
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  deleteProduct(id) {
    this.setState({
      products: this.state.products.filter((product) => product.id !== id),
    });
  }

  render() {
    return (
      <div className="products-container">
        {this.state.products === 0 ? (
          <p>Cargando...</p>
        ) : (
          this.state.products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              thumbnail={product.thumbnail}
              id={product.id}
              deleteProduct={(id) => this.deleteProduct(id)}
            />
          ))
        )}
      </div>
    );
  }
}

export default Products;
