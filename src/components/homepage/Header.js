import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Ca from "./CartList";
import "./cart.css";
import "./billcart.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Header({
  goToCart,
  deleteCart,
  showCart,
  setShowCart,
  orderdList,
  setOrderedList,
  successfulOrderList,
  messageAfterSuccessOrde
}) {
  const [nav, setNav] = useState(false);
  const [CART, setCART] = useState([]);

  // bootstrap
  const [show, setShow] = useState(false);
  function handleClose() {
    setShow(false);
  }

  useEffect(() => {
    setCART(goToCart);
  }, [goToCart]);

  const openNav = () => {
    setNav(!nav);
  };
  const operCart = () => {
    setShowCart(true);
  };
  const closeCart = () => {
    setShowCart(false);
  };
  const closeNav = () => {
    setNav(false);
  };

  const orderList = (data) => {
    setShow(true);
    // console.log(data);
    const personData = { date: new Date().toLocaleDateString() };
    setOrderedList([orderdList, ...data, personData]);

  };

  return (
    <div>
      <header className="App-header">
        <NavLink to="/" className="h-img">
          <span>Cafetería</span>
        </NavLink>
        <ul className="ul" id={nav ? "hidden" : "ul"}>
          <li>
            <NavLink onClick={closeNav} to="/" className="a">
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink onClick={closeNav} to="/" className="a">
              Product
            </NavLink>
          </li> */}
          <li>
            <a href="#about" onClick={closeNav} className="a">
              About
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeNav} className="a">
              Contact
            </a>
          </li>
        </ul>

        <div className="corner">
          {!showCart ? (
            <button onClick={operCart} className="cart-btn-open">
              <i className="bx bxs-cart-alt cart-btn"></i>
              <sup className="cart-btn-open">{goToCart.length}</sup>
            </button>
          ) : (
            <div className="viphidden" id={showCart}>
              <div className="flex-btn">
                <button onClick={closeCart} className="slide">
                  <i className="bx bx-x"></i>
                </button>
                <button onClick={operCart}>
                  <i className="bx bxs-cart-alt cart-btn"></i>

                  <sup>{goToCart.length}</sup>
                </button>
              </div>
              {CART.map((elem, cartIndex) => {
                return (
                  <>
                    <div key={elem.id} className="block">
                      <div className="img-cart">
                        <img
                          src={elem.img}
                          alt=""
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                      <div className="cart-details">
                        <div className="cart-name">
                          <p>{elem.name}</p>
                          <p>price ${elem.price}</p>
                        </div>
                        <div className="cart-quantity">
                          <button
                            className="btn-plus"
                            onClick={() => {
                              const increment = CART.map((elem, index) => {
                                return cartIndex === index
                                  ? { ...elem, quantity: elem.quantity + 1 }
                                  : elem;
                              });
                              setCART(increment);
                            }}
                          >
                            +
                          </button>
                          <p>{elem.quantity}</p>
                          <button
                            className="btn-plus"
                            onClick={() => {
                              const increment = CART.map((elem, index) => {
                                return cartIndex === index
                                  ? {
                                    ...elem,
                                    quantity:
                                      elem.quantity > 1
                                        ? elem.quantity - 1
                                        : 1,
                                  }
                                  : elem;
                              });
                              setCART(increment);
                            }}
                          >
                            -
                          </button>
                          <button
                            onClick={() => deleteCart(elem.id)}
                            className="btn-cart-delete"
                          >
                            delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}

              <div className="total">
                <p>
                  Total $
                  {CART.map((item) => item.price * item.quantity).reduce(
                    (total, value) => total + value,
                    0
                  )}
                </p>

                <button className="bill-order" onClick={() => orderList(CART)}>
                  Order Now
                </button>
                {/* bootstrap */}
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Cafetería</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <table>
                      <tr>
                        <th>Coffee Names</th>
                        <th>Price</th>
                      </tr>
                      {CART.map((item) => {
                        return (
                          <>
                            <tr>
                              <td>{item.name}</td>
                              <td style={{ textAlign: "center" }}>
                                ${item.price}
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </table>
                    <div className="container-date-total-flex">
                      <div className="table-date">
                        Date : {new Date().toDateString()}{" "}
                        {new Date().toLocaleTimeString()}
                      </div>
                      <div className="table-total">
                        Total: $
                        {CART.map((item) => item.price * item.quantity).reduce(
                          (total, value) => total + value,
                          0
                        )}
                      </div>
                    </div>
                  </Modal.Body>

                  <Modal.Footer>
                    <button variant="secondary" onClick={handleClose}>
                      Close
                    </button>
                    <button
                      variant="primary"
                      onClick={() => {
                        orderList(CART);
                        handleClose();
                        successfulOrderList();
                        setShowCart(false);
                      }}
                    >
                      Print Bill
                    </button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          )}
        </div>
        <button className="btn" onClick={openNav}>
          <i className="bx bx-menu"></i>
        </button>
      </header>
    </div>
  );
}

export default Header;
