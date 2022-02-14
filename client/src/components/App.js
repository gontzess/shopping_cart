import React from "react";
import AddForm from "./AddForm.js";
import Cart from "./Cart.js";
import Products from "./Products.js";

const App = () => {
  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart />
      </header>

      <main>
        <Products />
        <AddForm />
      </main>
    </div>
  );
};

export default App;
