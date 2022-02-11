import { useState } from "react";
import { useDispatch } from "react-redux";
import { productEdited } from "../actions/productsActions";

const EditForm = ({ product, onClose }) => {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);
  const dispatch = useDispatch();

  const handleEditProduct = async (e) => {
    e.preventDefault();
    dispatch(productEdited(product._id, { title, price, quantity }));
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
