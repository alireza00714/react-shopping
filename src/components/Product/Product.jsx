import React from "react";

function Product({name, size, price}) {
  return (
    <div className="product col-12 pb-3 col-lg-5 d-flex flex-column">
      <div classNames="image-container">
        <img
          className="img w-100 h-100 mb-3"
          src="https://react-shopping-cart-seven-lovat.vercel.app/images/dress1.jpg"
          alt=""
        />
      </div>
      <p className="name text-center">Midi sundress with shirring detail</p>
      <div className="d-flex justify-content-around align-items-center px-3 mb-3 down-img">
        <p className="price mb-0 text-white py-2 px-4">53.45$</p>
        <p className="size mb-0 text-white py-2 px-4">Size: XL</p>
      </div>
      <div className="w-100 px-3">
        <button className="text-white py-3 w-100">Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
