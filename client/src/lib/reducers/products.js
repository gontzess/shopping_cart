const products = (state = [], action) => {
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
      return state.map((product) => {
        if (product._id === action.payload.productId) {
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

export default products;
