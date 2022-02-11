import { useState } from "react";
import { useDispatch } from "react-redux";
import { productDeleted, cartItemAdded } from "../actions/productsActions";

import EditForm from "./EditForm";

const Product = ({ product }) => {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteProduct = (e) => {
    e.preventDefault();
    dispatch(productDeleted(product._id));
  };

  const handleToggleForm = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(cartItemAdded(product._id));
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
          <EditForm onClose={handleToggleForm} product={product} />
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
