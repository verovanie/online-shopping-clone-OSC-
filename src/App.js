import React from "react";
import Cart from "./containers/Cart";
import ProductList from "./containers/ProductList";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Online Shopping Clone</h1>
        </div>
        <div>Admin :: Firoz || Shubham || Ishaan </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <ProductList />
        </div>
        <div className="col-md-4">
          <Cart />
        </div>
      </div>

      <footer>
        <small>
          made by Random Orange Dots
          <div>Supported By Mayuri Amale</div>
        </small>
      </footer>
    </div>
  );
};

export default App;
