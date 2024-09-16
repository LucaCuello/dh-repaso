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
      <Switch>{/* Rutas acá */}</Switch>
    </BrowserRouter>
  );
}

export default App;
