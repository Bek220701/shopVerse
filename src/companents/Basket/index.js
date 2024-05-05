import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FcLeft } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import CountUp from 'react-countup';

const Basket = () => {
  const { basket } = useSelector((s) => s);
  const dispath = useDispatch();
  const nav = useNavigate();
  let totalPrice = basket.reduce((acc, el) => {
    return acc + el.price * el.quantyti;
  }, 0);

  return (
    <div id="basket">
      {basket.length ? (
        <div className="container">
          <div className="basket">
            {basket.map((el) => (
              <div className="card">
                <div className="card--img">
                  <Zoom>
                    <img src={el.image} alt="img" />
                  </Zoom>
                </div>
                <div className="card--text">
                  <h1>{el.title.slice(0,25)}</h1>
                  <p>{el.description.slice(0,250)}</p>
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
                  <h4><CountUp
  start={0}
  end={Math.trunc(el.price * el.quantyti)}
  duration={2.75}
  separator=" "
>
  
</CountUp>$</h4>
                  <div className="card--btns">
                    <button
                      className="card--btns__minus"
                      onClick={() =>
                        dispath({ type: "QUAN_MINUS", payload: el })
                      }
                    >
                      -
                    </button>
                    <h3>{el.quantyti}</h3>
                    <button
                      className="card--btns__plus"
                      onClick={() =>
                        dispath({ type: "QUAN_PLUS", payload: el })
                      }
                    >
                      +
                    </button>
                  </div>
                  <a
                    onClick={() =>
                      dispath({ type: "DELETE_BASKET", payload: el })
                    }
                  >
                    <MdDeleteForever />
                  </a>
                </div>
              </div>
            ))}
          </div>
          {/* <h1>Total Price : {Math.trunc(totalPrice)}$</h1> */}
          <h1>Total Price  <CountUp
  start={0}
  end={Math.trunc(totalPrice)}
  duration={2.75}
  separator=" ">
  
</CountUp>{" "}$</h1>

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
            <FcLeft onClick={() => nav("/favorite")} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
