// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import "./cart.css";

// function CartList({ goToCart, deleteCart,CART,setCART }) {
//   const [showCart, setShowCart] = useState(true);
// //   const [CART, setCART] = useState([]);
//   useEffect(() => {
//     setCART(goToCart);
//   }, [goToCart]);

//   const operCart = () => {
//     setShowCart(!showCart);
//   };

//   return (
//     <div>
//       <div id="viphidden" className={showCart}>
//         <button onClick={operCart}>close</button>
//         {goToCart.map((elem, cartIndex) => {
//           return (
//             <div key={elem.id} className="">
//               <img
//                 src={elem.img}
//                 alt=""
//                 style={{ width: "100%", height: "100%" }}
//               />
//               <div className="cart-details">
//                 <p>{elem.name}</p>
//                 <p>price ${elem.price}</p>
//                 <button
//                   onClick={() => {
//                     const increment = CART.map((elem, index) => {
//                       return cartIndex === index
//                         ? { ...elem, quantity: elem.quantity + 1 }
//                         : elem;
//                     });
//                     setCART(increment);
//                   }}
//                 >
//                   +
//                 </button>
//                 <p>{elem.quantity}</p>
//                 <button
//                   onClick={() => {
//                     const increment = CART.map((elem, index) => {
//                       return cartIndex === index
//                         ? {
//                             ...elem,
//                             quantity: elem.quantity > 1 ? elem.quantity - 1 : 1,
//                           }
//                         : elem;
//                     });
//                     setCART(increment);
//                   }}
//                 >
//                   -
//                 </button>
//                 <button onClick={() => deleteCart(elem.id)}>delete</button>
//               </div>
//             </div>
//           );
//         })}
//         <div>
//           <p>
//             total:{" "}
//             {CART.map((item) => item.price * item.quantity).reduce(
//               (total, value) => total + value,0
//             )}
//           </p>
//           javlist
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartList;
