import React from "react";
import "./product.css";

function Product({ name, size, price, imgSrc, onClick }) {
  return (
    <div className="product col-12 pb-3 px-0 col-lg-5 me-0 d-flex flex-column shadow-sm">
      <div className="image-container mb-3">
        <img className="img w-100 h-100" src={imgSrc} alt="" />
      </div>
      <p className="name text-center">{name}</p>
      <div className="d-flex justify-content-around align-items-center px-3 mb-3 down-img">
        <p className="price mb-0 text-white py-2 px-4">{price}$</p>
        <p className="size mb-0 text-white py-2 px-4">{size}</p>
      </div>
      <div className="w-100 px-3">
        <button className="text-white py-3 w-100" onClick={onClick}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
