// import React from "react";
import heroImg from "../../assets/images/hero__img.png";

function Hero() {
  return (
    <section className="hero-section">
      <div className="contaienr">
        <div className="hero__cards">
          <div className="hero__card">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
