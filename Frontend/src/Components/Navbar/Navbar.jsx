/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {assets} from '../../assets/assets'
import './Navbar.css'
import '../../Pages/Cart/Cart'
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("home")
    const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className="navbar mt-5 py-5 flex justify-between items-center">
      <Link to="/">
        <img
          className="logo w-[150px]  h-auto object-contain"
          src={assets.logo}
          alt=""
        />
      </Link>
      <ul className="navbar-menu flex list-none gap-[20px] text-2xl text-gray-700 font-outfit">
        <li
          onClick={() => {
            setMenu("home");
            document
              .getElementById("home")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className={menu === "home" ? "active" : ""}
        >
          home
        </li>

        <li
          onClick={() => {
            setMenu("menu");
            document
              .getElementById("explore-menu")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </li>

        <li
          onClick={() => {
            setMenu("mobile-app");
            document
              .getElementById("app-download")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </li>

        <li
          onClick={() => {
            setMenu("contact-us");
            document
              .getElementById("footer")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </li>
      </ul>

      <div className="navbar-right flex items-center gap-10">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button
          onClick={() => setShowLogin(true)}
          className="bg-transparent text-2xl text-gray-700 border border-gray-700 rounded-4xl py-3 px-8 hover:bg-amber-700 hover:text-amber-50"
        >
          {" "}
          Sign in{" "}
        </button>
      </div>
    </div>
  );
}

export default Navbar