import axios from "axios";

const apiClient = {
  getProducts: () => {
    return axios
      .get("/api/products")
      .then((response) => response.data)
      .catch((err) => console.log(err));
  },
  addProduct: (newProduct) => {
    return axios
      .post("/api/products", newProduct)
      .then((response) => response.data)
      .catch((err) => console.log(err));
  },
  deleteProduct: (productId) => {
    return axios
      .delete(`/api/products/${productId}`)
      .catch((err) => console.log(err));
  },
  addCartItem: (productId) => {
    return axios
      .post("/api/add-to-cart", { productId })
      .then((response) => response.data.item)
      .catch((err) => console.log(err));
  },
  editProduct: (productId, productUpdates) => {
    return axios
      .put(`/api/products/${productId}`, productUpdates)
      .then((response) => response.data)
      .catch((err) => console.log(err));
  },
  getCartItems: () => {
    return axios
      .get("/api/cart")
      .then((response) => response.data)
      .catch((err) => console.log(err));
  },
  checkoutCart: () => {
    return axios
      .post("/api/checkout")
      .then((response) => response.data)
      .catch((err) => console.log(err));
  },
};

export default apiClient;
