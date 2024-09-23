import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./views/Home/Home";
import Popular from "./views/Popular/Popular";
import ProductDetails from "./views/ProductDetails/ProductDetails";
import Products from "./views/Products/Products";
import TopRated from "./views/TopRated/TopRated";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/products" component={Products} />
        <Route path="/toprated" component={TopRated} />
        <Route path="/popular" component={Popular} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
