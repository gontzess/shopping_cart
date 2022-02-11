import apiClient from "../lib/ApiClient";

export const productsReceivedSuccess = (products) => {
  return { type: "PRODUCTS_RECEIVED", payload: products };
};

export const productDeletedSuccess = (productId) => {
  return { type: "PRODUCT_DELETED", payload: productId };
};

export const cartItemAddedSuccess = (cartItem) => {
  return { type: "CART_ITEM_ADDED", payload: cartItem };
};

export const productEditedSuccess = (updatedProduct) => {
  return { type: "PRODUCT_EDITED", payload: updatedProduct };
};

export const productAddedSuccess = (newProduct) => {
  return { type: "PRODUCT_ADDED", payload: newProduct };
};

export const productsReceived = () => {
  return (dispatch) => {
    apiClient.getProducts((products) => {
      dispatch(productsReceivedSuccess(products));
    });
  };
};

export const productAdded = (newProduct, callback) => {
  return (dispatch) => {
    apiClient.addProduct(newProduct, (product) => {
      dispatch(productAddedSuccess(product));
      if (callback) {
        callback();
      }
    });
  };
};

export const productDeleted = (productId) => {
  return (dispatch) => {
    apiClient
      .deleteProduct(productId)
      .then(dispatch(productDeletedSuccess(productId)));
  };
};

export const cartItemAdded = (productId) => {
  return (dispatch) => {
    apiClient.addCartItem(productId, (cartItem) => {
      dispatch(cartItemAddedSuccess(cartItem));
    });
  };
};

export const productEdited = (productId, productData) => {
  return (dispatch) => {
    apiClient.editProduct(productId, productData, (updatedProduct) => {
      dispatch(productEditedSuccess(updatedProduct));
    });
  };
};
