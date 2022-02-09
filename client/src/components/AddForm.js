import { useState } from "react";

const AddForm = ({ onAddProduct }) => {
  const [showForm, updateShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleToggleForm = (e) => {
    e.preventDefault();
    updateShowForm(!showForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct({ title, price, quantity });
    setTitle("");
    setPrice("");
    setQuantity("");
    updateShowForm(!showForm);
  };

  return (
    <div className={showForm ? "add-form visible" : "add-form"}>
      <p>
        <a
          href="/#"
          className="button add-product-button"
          onClick={handleToggleForm}
        >
          Add A Product
        </a>
      </p>
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
          <a href="/#" onClick={handleSubmit} className="button">
            Add
          </a>
          <a href="/#" onClick={handleToggleForm} className="button">
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
