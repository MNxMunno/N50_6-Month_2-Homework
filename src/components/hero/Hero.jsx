// import React from "react";
import heroImg from "../../assets/images/hero__img.png";
import heroLogoImg from "../../assets/images/hero__logo.png";
import { FaArrowRight } from "react-icons/fa6";

function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero__cards">
          <div className="hero__card">
            <img src={heroLogoImg} alt="img" />
            <h1 className="hero__card-title">Up to 10% off Voucher</h1>
            <a className="hero__card-link" href="#">
              Shop Now
              <FaArrowRight />
            </a>
          </div>
          <div className="hero__card">
            <img src={heroImg} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
