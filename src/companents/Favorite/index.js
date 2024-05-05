import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";
import { FcLeft } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Favorite = () => {
  const { favorite} = useSelector((s) => s);
  const nav = useNavigate()
  return (
    <div id="favorite">
      <div className="container">
        {favorite.length ? (
          <div className="favorite">
            {favorite.map((el) => (
              <ProductCard el={el} hiden={false} />
            ))}
          </div>
        ) : (
          <div class="info">
            <div class="info__icon">
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m12 1.5c-5.79844 0-10.5 4.70156-10.5 10.5 0 5.7984 4.70156 10.5 10.5 10.5 5.7984 0 10.5-4.7016 10.5-10.5 0-5.79844-4.7016-10.5-10.5-10.5zm.75 15.5625c0 .1031-.0844.1875-.1875.1875h-1.125c-.1031 0-.1875-.0844-.1875-.1875v-6.375c0-.1031.0844-.1875.1875-.1875h1.125c.1031 0 .1875.0844.1875.1875zm-.75-8.0625c-.2944-.00601-.5747-.12718-.7808-.3375-.206-.21032-.3215-.49305-.3215-.7875s.1155-.57718.3215-.7875c.2061-.21032.4864-.33149.7808-.3375.2944.00601.5747.12718.7808.3375.206.21032.3215.49305.3215.7875s-.1155.57718-.3215.7875c-.2061.21032-.4864.33149-.7808.3375z"
                  fill="#393a37"
                ></path>
              </svg>
            </div>
            <div class="info__title">You don't have any products yet!</div>
            <div class="info__close">
            <FcLeft onClick={()=>  nav("/product")}/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorite;
