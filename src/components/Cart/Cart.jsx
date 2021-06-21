import React from "react";
import CartItem from "../CartItem/CartItem";
import "./cart.css";

function Cart() {
  return (
    <div className="cart-container shadow px-3 py-2">
      <div className="text-center fw-bold fs-2 mb-3">Cart</div>
      <CartItem />
      <div className="cart-footer d-flex justify-content-between align-items-center">
        <div className="fw-bold fs-3">Total: </div>
        <button className="text-white py-2 px-4">Proceed</button>
      </div>
    </div>
  );
}

export default Cart;
