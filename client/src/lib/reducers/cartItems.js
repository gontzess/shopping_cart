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

export default cartItems;
