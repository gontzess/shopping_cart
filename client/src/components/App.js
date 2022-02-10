import React, { useState } from "react";
import axios from "axios";
import AddForm from "./AddForm.js";
import Cart from "./Cart.js";
import Products from "./Products.js";

const App = () => {
  const [cartData, updateCartData] = useState([]);



  const handleCheckout = async () => {
    await axios.post("/api/checkout");
    // updateCartData([]);
  };

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart onCheckout={handleCheckout} />
      </header>

      <main>
        <Products/>
        <AddForm/>
      </main>
    </div>
  );
};

export default App;
