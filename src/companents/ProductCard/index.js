import React from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { TiDeleteOutline } from "react-icons/ti";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ProductCard = ({ el, hiden,fav }) => {
  const { favorite, basket } = useSelector((s) => s);
  const dispatch = useDispatch();
  let someFav = favorite.some((some) => some.id === el.id);
  return (
    <div className="card">
      <div className="card--block">
        <Zoom>
          <img src={el.image} alt="img" />
        </Zoom>
        <h2>{el.title.slice(0,20)}</h2>
        {el.price >= 3000 ? (
          <h3>
            {el.price - (el.price / 100) * 20}сом <span>{el.price}сом </span>
          </h3>
        ) : (
          <h3>{Math.round(el.price)}$ </h3>
        )}
        <div className="card--block__star">
          <FaStar
            style={{
              color: el.rating.rate >= 1 ? "orange" : "black",
            }}
          />
          <FaStar
            style={{
              color: el.rating.rate >= 2 ? "orange" : "black",
            }}
          />
          <FaStar
            style={{
              color: el.rating.rate >= 3 ? "orange" : "black",
            }}
          />
          <FaStar
            style={{
              color: el.rating.rate >= 4 ? "orange" : "black",
            }}
          />
          <FaStar
            style={{
              color: el.rating.rate >= 5 ? "orange" : "black",
            }}
          />
        </div>
        <button
          className="Btn"
          onClick={() => dispatch({ type: "ADD_TO_BASKET", payload: el })}
        >
          <div className="sign">
            <svg viewBox="0 0 512 512">
              <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
            </svg>
          </div>
          <div className="text">Купить</div>
        </button>
        {fav ? (
          <a onClick={() => dispatch({ type: "ADD_TO_FAVORITE", payload: el })}>
            <MdOutlineFavorite
              style={{
                color: someFav ? "red" : "gray",
              }}
            />
          </a>
        ) : null}
        {hiden ? null : (
          <h5
            onClick={() => dispatch({ type: "DELETE_FAVORITE", payload: el })}
          >
            <TiDeleteOutline />
          </h5>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
