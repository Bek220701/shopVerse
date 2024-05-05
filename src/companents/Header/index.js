import React, { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const {favorite,basket} = useSelector((s)=> s)
  const [search, setSearch]=useState("")
  const dispatch = useDispatch()
  const nav = useNavigate()
  const goToSearch = ()=>{
    dispatch({type:"SEARCH",payload:search})
    nav("/search")
    setSearch("")
  }
  console.log(search);
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <h1>ShopVerse</h1>
          <div className="header--nav">
            <Link to={"/"}>Home</Link>
            <Link to={"/product"}>Product</Link>
            <Link to={"/favorite"}>Favorite</Link>
           {
            favorite.length ?  <h4>
              {favorite.length}
            </h4> : null
           }
            <Link to={"/basket"}>Basket</Link>
            {
            basket.length ?  <h3>
              {basket.length}
            </h3> : null
           }
          </div>
          <div className="header--nav__icons">
            <h3 onClick={()=>goToSearch()}>
              <IoSearchOutline />
            </h3>
            <input value={search}
            type="text" placeholder="Search for “Phones”" onChange={(e)=>setSearch(e.target.value)} />
            <h2>
              <MdFavoriteBorder />
            </h2>
            <h2>
              <LuShoppingBag />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
