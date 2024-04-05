// import React from "react";
import logo from "../../assets/images/logo.svg";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";

function Header() {
  let navLinks = ["Home", "Contact", "About", "Sign in"];
  let navLink = navLinks?.map((el, index) => (
    <a href="#" key={index} className="nav__links">
      {el}
    </a>
  ));
  return (
    <header>
      <div className="container">
        <nav>
          <a href="#" className="logo">
            <img src={logo} alt="" />
          </a>
          <div className="nav__items">{navLink}</div>
          <div className="nav__btns">
            <form className="form">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="What are you looking for?"
              />
            </form>
            <div className="nav__btn">
              <CiHeart />
            </div>
            <div className="nav__btn">
              <MdOutlineShoppingCart />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
