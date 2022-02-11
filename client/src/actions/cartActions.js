import apiClient from "../lib/ApiClient";

export const cartItemsReceivedSuccess = (cartItems) => {
  return { type: "CART_ITEMS_RECEIVED", payload: cartItems };
};

export const cartCheckoutSuccess = () => {
  return { type: "CART_CHECKOUT" };
};

export const cartItemsReceived = () => {
  return (dispatch) => {
    apiClient.getCartItems((cartItems) => {
      dispatch(cartItemsReceivedSuccess(cartItems));
    });
  };
};

export const cartCheckout = () => {
  return (dispatch) => {
    apiClient.checkoutCart(() => {
      dispatch(cartCheckoutSuccess());
    });
  };
};
