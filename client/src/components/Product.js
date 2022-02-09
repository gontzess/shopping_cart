import { useState } from "react";
import EditForm from "./EditForm";

const Product = ({ product, onEditProduct, onDeleteProduct, onAddToCart }) => {
  const [showForm, setShowForm] = useState(false);
  const handleToggleForm = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };
  const handleDeleteProduct = (e) => {
    e.preventDefault();
    onDeleteProduct(product._id);
  };
  const handleAddToCart = (e) => {
    e.preventDefault();
    onAddToCart(product._id);
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
            onEditProduct={onEditProduct}
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
