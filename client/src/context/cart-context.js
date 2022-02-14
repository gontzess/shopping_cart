import { createContext, useReducer } from "react";
import apiClient from "../lib/ApiClient";

const CartContext = createContext();

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "CART_ITEMS_RECEIVED": {
      return action.payload;
    }
    case "CART_ITEM_ADDED": {
      let cartItemFound = false;

      const updatedCart = state.map((cartItem) => {
        if (cartItem._id === action.payload._id) {
          cartItemFound = true;
          return action.payload;
        } else {
          return cartItem;
        }
      });

      if (!cartItemFound) {
        return state.concat(action.payload);
      } else {
        return updatedCart;
      }
    }
    case "CART_CHECKOUT": {
      return [];
    }
    default:
      return state;
  }
};

const getCartItems = async (dispatch) => {
  const cartItems = await apiClient.getCartItems();
  dispatch({ type: "CART_ITEMS_RECEIVED", payload: cartItems });
};

const checkoutCart = async (dispatch) => {
  await apiClient.checkoutCart();
  dispatch({ type: "CART_CHECKOUT" });
};

const addCartItem = async (dispatch, productId) => {
  const newCartItem = await apiClient.addCartItem(productId);
  dispatch({ type: "CART_ITEM_ADDED", payload: newCartItem });
};

const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider, getCartItems, checkoutCart, addCartItem };
