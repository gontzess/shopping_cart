import { createContext, useReducer } from "react";
import apiClient from "../lib/ApiClient";

const ProductContext = createContext();

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS_RECEIVED": {
      return action.payload;
    }
    case "PRODUCT_ADDED": {
      return state.concat(action.payload);
    }
    case "PRODUCT_DELETED": {
      return state.filter((product) => product._id !== action.payload);
    }
    case "PRODUCT_UPDATED": {
      return state.map((product) => {
        if (product._id === action.payload._id) {
          return action.payload;
        } else {
          return product;
        }
      });
    }
    case "CART_ITEM_ADDED": {
      return state.map((product) => {
        if (product._id === action.payload) {
          return { ...product, quantity: product.quantity - 1 };
        } else {
          return product;
        }
      });
    }
    default:
      return state;
  }
};

const getProducts = async (dispatch) => {
  const products = await apiClient.getProducts();
  dispatch({ type: "PRODUCTS_RECEIVED", payload: products });
};

const addProduct = async (dispatch, newProduct) => {
  const addedProduct = await apiClient.addProduct(newProduct);
  dispatch({ type: "PRODUCT_ADDED", payload: addedProduct });
};

const deleteProduct = async (dispatch, productId) => {
  await apiClient.deleteProduct(productId);
  dispatch({ type: "PRODUCT_DELETED", payload: productId });
};

const editProduct = async (dispatch, productId, productUpdates) => {
  const updatedProduct = await apiClient.editProduct(productId, productUpdates);
  dispatch({ type: "PRODUCT_UPDATED", payload: updatedProduct });
};

const decrementProductQuantity = (dispatch, productId) => {
  dispatch({ type: "CART_ITEM_ADDED", payload: productId });
};

const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(productsReducer, []);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export {
  ProductContext,
  ProductProvider,
  getProducts,
  addProduct,
  deleteProduct,
  editProduct,
  decrementProductQuantity,
};
