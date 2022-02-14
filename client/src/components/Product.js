import { useState, useContext } from "react";
import { addCartItem, CartContext } from "../context/cart-context";
import {
  ProductContext,
  deleteProduct,
  decrementProductQuantity,
} from "../context/product-context";
import EditForm from "./EditForm";

const Product = ({ product, onAddToCart }) => {
  const [showForm, setShowForm] = useState(false);
  const { dispatch: productDispatch } = useContext(ProductContext);
  const { dispatch: cartDispatch } = useContext(CartContext);

  const handleToggleForm = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };

  const handleDeleteProduct = (e) => {
    e.preventDefault();
    deleteProduct(productDispatch, product._id);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    addCartItem(cartDispatch, product._id);
    decrementProductQuantity(productDispatch, product._id);
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
