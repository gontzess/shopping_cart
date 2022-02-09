import React, { useEffect, useState } from "react";
import axios from "axios";
import AddForm from "./AddForm.js";
import Cart from "./Cart.js";
import Products from "./Products.js";

const App = () => {
  const [productData, updateProductData] = useState([]);
  const [cartData, updateCartData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("/api/products");
      const dbData = response.data;
      updateProductData(dbData);
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getCart = async () => {
      const response = await axios.get("/api/cart");
      const dbData = response.data;
      updateCartData(dbData);
    };
    getCart();
  }, []);

  const handleCheckout = async () => {
    await axios.post("/api/checkout");
    updateCartData([]);
  };

  const handleAddToCart = async (productId) => {
    const response = await axios.post("/api/add-to-cart", { productId });
    const { product, item } = response.data;
    let cartItemFound = false;

    updateProductData(
      productData.map((prod) => {
        if (prod._id === product._id) {
          return product;
        } else {
          return prod;
        }
      })
    );

    const updatedCart = cartData.map((cartItem) => {
      if (cartItem._id === item._id) {
        cartItemFound = true;
        return item;
      } else {
        return cartItem;
      }
    });

    console.log(cartItemFound);

    if (!cartItemFound) {
      updateCartData(cartData.concat(item));
    } else {
      updateCartData(updatedCart);
    }
  };

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
        <Cart cartData={cartData} onCheckout={handleCheckout} />
      </header>

      <main>
        <Products
          products={productData}
          onAddToCart={handleAddToCart}
          onEditProduct={handleEditProduct}
          onDeleteProduct={handleDeleteProduct}
        />
        <AddForm onAddProduct={handleAddProduct} />
      </main>
    </div>
  );
};

export default App;
