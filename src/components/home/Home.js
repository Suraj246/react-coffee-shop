import React, { useState } from "react";
import "../homepage/cart.css";
import "./Home.css";
import "../homepage/cart.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="">
        <div className="bg-img">
          <img
            src={
              "images/top-view-cup-coffee-with-roasted-beans_52683-32340.jpg"
            }
            alt=""
            className="img"
          />
        </div>
        <div className="texton-img">
          <div className="c-name">
            <p>Cafetería </p>
            <p>Fresh Morning With Fresh Coffee</p>
            <NavLink to="/products" className="go-btn">
              Order Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
