import React from "react";
import "./cartitem.css";
function CartItem() {
  return (
    <div className="cart-item d-flex w-100 shadow-sm mb-2">
      <div className="img-container me-1">
        <img
          className="w-100 h-100"
          src="https://react-shopping-cart-seven-lovat.vercel.app/images/dress1.jpg"
          alt=""
        />
      </div>
      <div className="informations d-flex flex-column">
        <p className="m-0">
          <strong>Name:</strong> Lorem ipsum is placeholder text common 1
        </p>
        <p className="m-0">
          <strong>Size:</strong> S
        </p>
        <p className="mb-3">
          <strong>Price:</strong> 54.53$
        </p>
        <button className="w-50 mx-2 text-white py-2">Delete</button>
      </div>
    </div>
  );
}

export default CartItem;
