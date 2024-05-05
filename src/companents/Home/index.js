import React from "react";
// import etho from "../src/assets/img/Home-whatch.png";

const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div
          className="home"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.17) 0.89%, #000000 100%),url(https://www.swisswatchexpo.com/TheWatchClub/wp-content/uploads/2023/05/Rolex-GMT-Master-II-Black-Blue-Batman-Bezel-Steel-Mens-Watch-126710-.jpg) no-repeat center/cover",
            minHeight: "80vh",
          }}
        >
          <div className="home__left">
            <div className="home--text">
              <h2>Sale up to 20% off</h2>
              <h1>Apple Watch Ultra 2</h1>
              <p>
                The most rugged and capable Apple Watch pushes <br /> the limits
                again. Featuring the all-new S9 SiP.
              </p>
            </div>
            <div className="home--btns">
              <button className="home--btns__right">Shop Now</button>
              <button className="home--btns__left">Learn More</button>
            </div>
          </div>
            <img src="https://help.apple.com/assets/6580A106ABAA01F3080E7505/6580A10F08DFECBA0F060575/pt_BR/530426f52ed47d55feb194e1b12e236d.png" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
