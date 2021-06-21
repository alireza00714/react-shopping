import React from "react";

function ProductFilter() {
  return (
    <div className="filter-container px-3 pb-3 shadow-sm">
      <div className="filter-products d-flex justify-content-between">
        <div>6 Products</div>
        <div>
          <label htmlFor="price" className="me-1">
            Price:
          </label>
          <select name="price" id="price">
            <option value="">-</option>
            <option value="1">Highest</option>
            <option value="-1">Lowest</option>
          </select>
        </div>
        <div>
          <label htmlFor="size" className="me-1">
            Size:
          </label>
          <select name="size" id="size">
            <option value="">-</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;
