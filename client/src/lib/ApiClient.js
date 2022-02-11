import axios from "axios";

const apiClient = {
  getProducts: (callback) => {
    return axios
      .get("/api/products")
      .then((response) => response.data)
      .then(callback)
      .catch((err) => console.log(err));
  },
  addProduct: (newProduct, callback) => {
    return axios
      .post("/api/products", newProduct)
      .then((response) => response.data)
      .then(callback)
      .catch((err) => console.log(err));
  },
  deleteProduct: (productId) => {
    return axios
      .delete(`/api/products/${productId}`)
      .catch((err) => console.log(err));
  },
  addCartItem: (productId, callback) => {
    return axios
      .post("/api/add-to-cart", { productId })
      .then((response) => response.data.item)
      .then(callback)
      .catch((err) => console.log(err));
  },
  editProduct: (productId, productData, callback) => {
    return axios
      .put(`/api/products/${productId}`, productData)
      .then((response) => response.data)
      .then(callback)
      .catch((err) => console.log(err));
  },
  getCartItems: (callback) => {
    return axios
      .get("/api/cart")
      .then((response) => response.data)
      .then(callback)
      .catch((err) => console.log(err));
  },
  checkoutCart: (callback) => {
    return axios
      .post("/api/checkout")
      .then((response) => response.data)
      .then(callback)
      .catch((err) => console.log(err));
  },
};

export default apiClient;
