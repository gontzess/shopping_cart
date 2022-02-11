import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

const AddForm = () => {
  const [showForm, updateShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const dispatch = useDispatch();

  const handleToggleForm = (e) => {
    e.preventDefault();
    updateShowForm(!showForm);
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/products", {
      title,
      price,
      quantity,
    });
    const newProduct = response.data;
    resetForm();
    dispatch({ type: "PRODUCT_ADDED", payload: newProduct });
  };

  const resetForm = () => {
    setTitle("");
    setPrice("");
    setQuantity("");
    updateShowForm(!showForm);
  };

  if (!showForm) {
    return (
      <div className="add-form">
        <p>
          <a
            href="/#"
            className="button add-product-button"
            onClick={handleToggleForm}
          >
            Add A Product
          </a>
        </p>
      </div>
    );
  } else {
    return (
      <div className="add-form visible">
        <h3>Add Product</h3>
        <form>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="product-name"
              value={title}
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              id="product-price"
              value={price}
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input
              onChange={(e) => setQuantity(e.target.value)}
              type="text"
              id="product-quantity"
              value={quantity}
            />
          </div>

          <div className="actions form-actions">
            <a href="/#" onClick={handleAddProduct} className="button">
              Add
            </a>
            <a href="/#" onClick={handleToggleForm} className="button">
              Cancel
            </a>
          </div>
        </form>
      </div>
    );
  }
};

export default AddForm;
