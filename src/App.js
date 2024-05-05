import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./companents/Header";
import Home from "./companents/Home";
import Product from "./companents/Product";
import Basket from "./companents/Basket";
import Favorite from "./companents/Favorite";
import Search from "./companents/Search ";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
