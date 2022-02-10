import { combineReducers } from "redux";

const products = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS_RECEIVED": {
      return action.payload;
    }
    case "PRODUCT_ADDED": {
      return state.concat(action.payload)
    } 
    case "PRODUCT_DELETED": {
      return state.filter((product) => product._id !== action.payload);
    }
    case "PRODUCT_EDITED": {
      return state.map((product) => {
        if (product._id === action.payload._id) {
          return action.payload;
        } else {
          return product;
        }
      });
    }
    case "CART_ITEM_ADDED": {
      // return []
      return state.map((product) => {
        if (product._id === action.payload.productId) {
          let quantity = product.quantity - 1;
          console.log("new")
          console.log(product.quantity)
          console.log(product)
          return ({ quantity: 3, ...product });
        } else {
          return product;
        }
      });
    }
    default:
      return state;
  } 
}

const cartItems = (state = [], action) => {
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
        return cartItems.concat(action.payload);
      } else {
        return updatedCart;
      }

    }
    default:
      return state;
  } 
}


const rootReducer = combineReducers({ products, cartItems });

export default rootReducer; 
