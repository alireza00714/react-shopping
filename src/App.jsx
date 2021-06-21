import "./App.css";
import "bootstrap";
import "../node_modules/bootstrap/dist/js/bootstrap.esm";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header/Header";
import ProductFilter from "./components/ProductFilter/ProductFilter";
import Product from "./components/Product/Product";
function App() {
  return (
    <>
      <Header />
      <div className="row m-0 px-3">
        <div className="pf-container col-12 py-3 p-0 mb-5 col-lg-8 shadow">
          <ProductFilter />
          <div className="products-container p-3">
            <Product />
          </div>
        </div>
        <div className="col-12 col-lg-4"></div>
      </div>
    </>
  );
}

export default App;
