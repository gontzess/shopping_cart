import React, { useEffect, useState } from "react";
import axios from "axios";
import AddForm from "./AddForm.js";
import Cart from "./Cart.js";
import Products from "./Products.js";
import data from "../lib/data.js";

const App = () => {
  const [productData, updateProductData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("/api/products");
      const dbData = response.data;
      updateProductData(dbData);
    };
    getProducts();
  }, []);

  const handleEditProduct = async (id, toBeUpdated) => {
    const response = await axios.put(`/api/products/${id}`, toBeUpdated);
    const updatedProduct = response.data;

    updateProductData(
      productData.map((product) => {
        if (product._id === id) {
          return updatedProduct;
        } else {
          return product;
        }
      })
    );
  };

  const handleDeleteProduct = async (id) => {
    const response = await axios.delete(`/api/products/${id}`);
    console.log(response);
    updateProductData(productData.filter((product) => product._id !== id));
  };

  const handleAddProduct = async (toBeAdded) => {
    const response = await axios.post("/api/products", toBeAdded);
    const newProduct = response.data;

    updateProductData(productData.concat(newProduct));
  };

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart />
      </header>

      <main>
        <Products
          products={productData}
          onEditProduct={handleEditProduct}
          onDeleteProduct={handleDeleteProduct}
        />
        <AddForm onAddProduct={handleAddProduct} />
      </main>
    </div>
  );
};

export default App;
