import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Contact from "./views/Contact/Contact";
import Home from "./views/Home/Home";
import ProductDetails from "./views/ProductDetails/ProductDetails";
import Products from "./views/Products/Products";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
