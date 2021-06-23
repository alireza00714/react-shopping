function ProductFilter({ filters = { size: null, price: null }, setFilters, resultCount = 0 }) {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };
  return (
    <div className="filter-container px-3 pb-3 shadow-sm w-100">
      <div className="filter-products d-flex justify-content-between">
        <div>{resultCount} Products</div>
        <div>
          <label htmlFor={"price"} className="me-1">
            Price:
          </label>
          <select name={"price"} id="price" onChange={handleChange}>
            <option value={""}>-</option>
            <option value={"1"}>Highest</option>
            <option value={"-1"}>Lowest</option>
          </select>
        </div>
        <div>
          <label htmlFor={"size"} className="me-1">
            Size:
          </label>
          <select name={"size"} id="size" onChange={handleChange}>
            <option value={""}>-</option>
            <option value={"XS"}>XS</option>
            <option value={"S"}>S</option>
            <option value={"M"}>M</option>
            <option value={"L"}>L</option>
            <option value={"XL"}>XL</option>
            <option value={"XXL"}>XXL</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;
