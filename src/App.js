import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/homepage/Header";
import Home from "./components/home/Home";
import Items from "./components/productData/Items";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import pizzaData from "./components/productData/pizzaData";
import CartList from "./components/homepage/CartList";
import { NavLink, Route, Routes } from "react-router-dom";

const getLocalStorageData = JSON.parse(
  localStorage.getItem("coffeeList") || "[]"
);
function App() {
  const [cart, setCart] = useState(pizzaData);
  const [showCart, setShowCart] = useState(false);
  const [orderdList, setOrderedList] = useState([]);
  const [messageAfterSuccessOrder, setMessageAfterSuccessOrder] =
    useState(false);

  const [goToCart, setGoToCart] = useState(getLocalStorageData);
  // localStorage
  useEffect(() => {
    localStorage.setItem("coffeeList", JSON.stringify(goToCart));
  }, [goToCart]);
  const orderClick = (data) => {
    console.log("Order", data);
    console.log("Order", goToCart);
    // setCart([...cart]);
    setGoToCart([...goToCart, { ...data, quantity: 1 }]);
  };
  const deleteCart = (index) => {
    console.log("delete", index);
    const deleteC = goToCart.filter((elem) => {
      return index !== elem.id;
    });
    setGoToCart(deleteC);
  };
  function successfulOrderList() {
    setGoToCart([]);
    setTimeout(() => {
      if (setGoToCart) {
        alert("Successful Order");
      }
    }, 1000);
  }
  useEffect(() => {}, [setGoToCart]);

  return (
    <>
      <div>
        <Header
          showCart={showCart}
          setShowCart={setShowCart}
          goToCart={goToCart}
          deleteCart={deleteCart}
          orderdList={orderdList}
          setOrderedList={setOrderedList}
          successfulOrderList={successfulOrderList}
          messageAfterSuccessOrder={messageAfterSuccessOrder}
        />

        <Home />
        <Items orderClick={orderClick} cart={cart} />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
