import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

const EditForm = ({ product, onClose }) => {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);
  const dispatch = useDispatch();

  const handleEditProduct = async (e) => {
    e.preventDefault();
    const response = await axios.put(`/api/products/${product._id}`, { title, price, quantity });
    const updatedProduct = response.data;
    dispatch({ type: "PRODUCT_EDITED", payload: updatedProduct });
    onClose(e);
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="text"
            id="product-price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="text"
            id="product-quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div className="actions form-actions">
          <a href="/#" className="button" onClick={handleEditProduct}>
            Update
          </a>
          <a href="/#" className="button" onClick={onClose}>
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
