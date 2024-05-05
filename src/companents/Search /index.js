import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";

const Search = () => {
  const { search } = useSelector((s) => s);
  return (
    <div className="container">
      <ProductCard el={search} />
    </div>
  );
};

export default Search;
