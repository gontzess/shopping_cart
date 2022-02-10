import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import EditForm from "./EditForm";

const Product = ({ product }) => {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  // const cartItems = useSelector(store => store.cartItems)

  const handleDeleteProduct = async (e) => {
    e.preventDefault();
    await axios.delete(`/api/products/${product._id}`);
    dispatch({ type: "PRODUCT_DELETED", payload: product._id });
  };

  const handleToggleForm = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };

  // const handleAddToCart = (e) => {
  //   e.preventDefault();
  //   onAddToCart(product._id);
  // };

  const handleAddToCart = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/add-to-cart", { productId: product._id });
    const cartItem = response.data.item;
    dispatch({type: "CART_ITEM_ADDED", payload: cartItem})

    // updateProductData(
    //   productData.map((prod) => {
    //     if (prod._id === product._id) {
    //       return product;
    //     } else {
    //       return prod;
    //     }
    //   })
    // );
  };

  return (
    <div className="product">
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        <p className={product.quantity > 0 ? "quantity" : "quantity none-left"}>
          {product.quantity} left in stock
        </p>
        {showForm ? (
          <EditForm
            onClose={handleToggleForm}
            product={product}
          />
        ) : (
          <div className="actions product-actions">
            <a
              onClick={handleAddToCart}
              href="/#"
              className={
                product.quantity > 0
                  ? "button add-to-cart"
                  : "button add-to-cart disabled"
              }
            >
              Add to Cart
            </a>
            <a href="/#" onClick={handleToggleForm} className="button edit">
              Edit
            </a>
          </div>
        )}
        <a href="/#" onClick={handleDeleteProduct} className="delete-button">
          <span>X</span>
        </a>
      </div>
    </div>
  );
};

export default Product;
