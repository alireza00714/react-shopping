import React from "react";
import "./cartitem.css";
function CartItem({ name, imgSrc, size, price, count, onClick }) {
  return (
    <div className="px-2">
      <div className="cart-item d-flex w-100 shadow-sm mb-3">
        <div className="img-container me-1">
          <img className="w-100 h-100" src={imgSrc} alt="" />
        </div>
        <div className="informations d-flex flex-column">
          <p className="m-0">
            <strong>Name:</strong> {name}
          </p>
          <p className="m-0">
            <strong>Size:</strong> {size}
          </p>
          <p className="mb-3">
            <strong>Price:</strong> {price}$ X {count}
          </p>
          <button className="w-50 mx-2 text-white py-2" onClick={onClick}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
