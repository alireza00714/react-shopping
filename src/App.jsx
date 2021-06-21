import "./App.css";
import "bootstrap";
import "../node_modules/bootstrap/dist/js/bootstrap.esm";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header/Header";
import ProductFilter from "./components/ProductFilter/ProductFilter";
import Product from "./components/Product/Product";
import products from "./data/data";
import Cart from "./components/Cart/Cart";
import CartItem from "./components/CartItem/CartItem";
import { useState } from "react";
function App() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <>
      <Header />
      <div className="row m-0 px-0 px-lg-3 gap-5">
        <div className="pf-container col-12 py-3 px-1 pb-5 mb-5 ms-0 ms-lg-5 me-4 col-lg-7 shadow">
          <ProductFilter />
          <div className="products-container py-3 w-100">
            <div className="row w-100 p-2 justify-content-center m-0 gap-5 ">
              {filteredProducts.map((item) => (
                <Product key={item.id} name={item.name} imgSrc={item.imgSrc} price={item.price} size={item.size} />
              ))}
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <Cart>
            <CartItem />
          </Cart>
        </div>
      </div>
    </>
  );
}

export default App;
