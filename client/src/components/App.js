import React, { useEffect, useState } from "react";
import AddForm from "./AddForm.js";
import Cart from "./Cart.js";
import Products from "./Products.js";
import data from "../lib/data.js";

const App = () => {
  const [productData, updateProductData] = useState([]);
  // const [cartData, updateCartData] = useState([]);

  useEffect(() => {
    updateProductData(data);
  }, [])

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart />
      </header>

      <main>
        <Products products={productData}/>
        <AddForm />
      </main>
    </div>
  );
};

export default App;
