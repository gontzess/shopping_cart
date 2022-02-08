import { useState } from "react";
import EditForm from "./EditForm";

const Product = ({ product, onEditProduct, onDeleteProduct }) => {
  const [showForm, setShowForm] = useState(false);
  const handleToggleForm = () => {
    setShowForm(!showForm);
  };
  const handleDeleteProduct = (e) => {
    e.preventDefault();
    onDeleteProduct(product._id);
  };

  return (
    <div class="product">
      <div class="product-details">
        <h3>{product.title}</h3>
        <p class="price">${product.price}</p>
        <p class="quantity">{product.quantity} left in stock</p>
        {showForm ? (
          <EditForm
            onEditProduct={onEditProduct}
            onClose={handleToggleForm}
            product={product}
          />
        ) : (
          <div class="actions product-actions">
            <a class="button add-to-cart">Add to Cart</a>
            <a onClick={handleToggleForm} class="button edit">
              Edit
            </a>
          </div>
        )}
        <a onClick={handleDeleteProduct} class="delete-button">
          <span>X</span>
        </a>
      </div>
    </div>
  );
};

export default Product;
