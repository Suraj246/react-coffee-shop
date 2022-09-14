import React, { useState } from "react";
import pizzaData from "./pizzaData";
import { useNavigate } from "react-router-dom";

import "./items.css";

function Items({ orderClick, cart }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="pizza-container">
        <h3
          style={{
            alignItems: "center",
            textAlign: "center",
            paddingLeft: "10x",
            paddingTop: "30px",
            marginBottom: "-10px",
            fontSize: "2rem",
            color: "white",
          }}
        >
          Our Menu
        </h3>
        <div>
          <h3
            style={{
              marginLeft: "10px",
              fontSize: "1.4rem",
              color: "white",
            }}
          >
            Espresso
          </h3>
        </div>

        <div className="flex-container">
          {cart.slice(0, 5).map((elem) => {
            const { img, name, price, id, link } = elem;
            return (
              <div className="menulist" key={id}>
                <button onClick={() => navigate(link)} className="img-btn">
                  <img src={img} alt="" className="item-img" />
                </button>
                <div className="item-info">
                  <p>{name}</p>
                  <p>Price: ${price}</p>
                </div>
                <div className="item-order">
                  <button
                    className="btn-order"
                    onClick={() => orderClick(elem)}
                  >
                    order
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {" "}
          <h3
            style={{
              marginLeft: "10px",
              fontSize: "1.4rem",
              color: "white",
            }}
          >
            Cappuccino
          </h3>
        </div>
        <div className="flex-container">
          {cart.slice(5, 10).map((elem) => {
            const { img, name, price, id, link } = elem;
            return (
              <div className="menulist" key={id}>
                <button onClick={() => navigate(link)} className="img-btn">
                  <img src={img} alt="" className="item-img" />
                </button>
                <div className="item-info">
                  <p>{name}</p>
                  <p>Price: ${price}</p>
                </div>
                <div className="item-order">
                  <button
                    className="btn-order"
                    onClick={() => orderClick(elem)}
                  >
                    order
                  </button>
                </div>{" "}
              </div>
            );
          })}
        </div>

        <div>
          {" "}
          <h3
            style={{
              marginLeft: "10px",
              fontSize: "1.4rem",
              color: "white",
            }}
          >
            Latte
          </h3>
        </div>
        <div className="flex-container">
          {cart.slice(10, 15).map((elem) => {
            const { img, name, price, id, link } = elem;
            return (
              <div className="menulist" key={id}>
                <button onClick={() => navigate(link)} className="img-btn">
                  <img src={img} alt="" className="item-img" />
                </button>
                <div className="item-info">
                  <p>{name}</p>
                  <p>Price: ${price}</p>
                </div>
                <div className="item-order">
                  <button
                    className="btn-order"
                    onClick={() => orderClick(elem)}
                  >
                    order
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Items;
