import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../ProductCard";
// import { data } from "../Data/data";
import axios from "axios";

const Product = () => {
  const [sortProduct, setSortProduct] = useState("");
  const { products, hiden } = useSelector((s) => s);
  const dispatch = useDispatch();
  const getProduct = () => {
    return async (dispatch) => {
      const res = await axios("https://fakestoreapi.com/products");
      const { data } = await res;
      console.log(data);
      dispatch({ type: "PRODUCT", payload: data });
    };
  };

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <div id="product">
      <div className="container">
        <select
          onChange={(e) =>
            dispatch({ type: "PRODUCT_SORT", payload: e.target.value })
          }
        >
          <option value="expensive">Expensive</option>
          <option value="cheap">Cheap</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="rating">Rating</option>
        </select>
        <select
          className="sele1"
          onChange={(e) =>
            dispatch({ type: "FILTER_PRODUCT", payload: e.target.value })
          }
        >
          <option value="2000">от 2000сом до 3000сом</option>
          <option value="4000">от 4000сом до 10000сом</option>
          <option value="20000">от 20000сом до 50000сом</option>
          <option value="50000">от 50000сом до 70000сом</option>
        </select>
        <div className="product">
          {products.map((el) => (
            <ProductCard el={el} hiden={true} fav={true}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
