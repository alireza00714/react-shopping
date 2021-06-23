import "./App.css";
import "bootstrap";
import "../node_modules/bootstrap/dist/js/bootstrap.esm";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header/Header";
import ProductFilter from "./components/ProductFilter/ProductFilter";
import Product from "./components/Product/Product";
import products from "./data/data";
import CartItem from "./components/CartItem/CartItem";
import { useState, useEffect } from "react";

function App() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cartItem, setCartItem] = useState([]);
  const [filters, setFilters] = useState({
    size: null,
    price: null,
  });

  useEffect(() => {
    if (filters.size) {
      setFilteredProducts(products.filter((item) => item.size === filters.size));
    } else {
      setFilteredProducts(products);
    }
  }, [filters.size]);

  useEffect(() => {
    let array = filteredProducts;
    if (filters.price === "-1") {
      setFilteredProducts(array.sort((a, b) => b.price - a.price));
    } else if (filters.price === "1") {
      setFilteredProducts(array.sort((a, b) => a.price - b.price));
    } else {
      setFilteredProducts(array.sort((a, b) => a.id - b.id));
    }
  }, [filters.price, filteredProducts]);

  const addProduct = () => {
    const product = {
      id: 5,
      name: "Lorem ipsum is placeholder text common 6",
      imgSrc: "https://react-shopping-cart-seven-lovat.vercel.app/images/dress6.jpg",
      price: 52.14,
      size: "XS",
      count: 0,
    };
    setFilteredProducts([product, ...filteredProducts]);
  };

  const addToCart = (id) => {
    const product = filteredProducts.filter((item) => item.id === id);
    if (product[0].count === 0) {
      product[0].count++;
      setCartItem([...cartItem, ...product]);
    } else {
      product[0].count++;
      setCartItem(cartItem.map((item) => (item.id === id ? { ...item, count: product[0].count } : item)));
    }
  };

  const deleteCartItem = (id) => {
    setCartItem(cartItem.filter((item) => item.id !== id));
  };
  return (
    <>
      <Header />
      <button className="add-product text-white py-2 px-4 ms-5 mb-4" onClick={addProduct}>
        Add New Product
      </button>
      <div className="row m-0 px-0 px-lg-3 gap-5">
        <div className="pf-container col-12 py-3 px-0 pb-5 mb-5 ms-0 ms-lg-5 me-4 col-lg-7 shadow">
          <ProductFilter filters={filters} setFilters={setFilters} resultCount={filteredProducts.length} />
          <div className="products-container py-3 w-100">
            <div className="row w-100 p-2 justify-content-center m-0 gap-5 ">
              {filteredProducts.map((item) => (
                <Product
                  key={item.id}
                  name={item.name}
                  imgSrc={item.imgSrc}
                  price={item.price}
                  size={item.size}
                  onClick={() => {
                    addToCart(item.id);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="cart-container shadow p-2">
            <div className="text-center fw-bold fs-2 mb-3 px-2">Cart</div>
            {cartItem.map((item) => (
              <CartItem
                key={item.id}
                name={item.name}
                imgSrc={item.imgSrc}
                price={item.price}
                size={item.size}
                count={item.count}
                onClick={() => {
                  deleteCartItem(item.id);
                }}
              />
            ))}
            <div className="cart-footer d-flex justify-content-between align-items-center">
              <button className="text-white py-3 px-4 w-100">Proceed</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
