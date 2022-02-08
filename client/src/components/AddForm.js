import { useState } from "react";

const AddForm = ({ onAddProduct }) => {
  const [showForm, updateShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct({ title, price, quantity });
    setTitle("");
    setPrice("");
    setQuantity("");
    updateShowForm(!showForm);
  };

  return (
    <div class={showForm ? "add-form visible" : "add-form"}>
      <p>
        <a
          class="button add-product-button"
          onClick={() => updateShowForm(!showForm)}
        >
          Add A Product
        </a>
      </p>
      <h3>Add Product</h3>
      <form>
        <div class="input-group">
          <label for="product-name">Product Name</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            id="product-name"
            value={title}
          />
        </div>

        <div class="input-group">
          <label for="product-price">Price</label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            id="product-price"
            value={price}
          />
        </div>

        <div class="input-group">
          <label for="product-quantity">Quantity</label>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="text"
            id="product-quantity"
            value={quantity}
          />
        </div>

        <div class="actions form-actions">
          <a onClick={handleSubmit} class="button">
            Add
          </a>
          <a onClick={() => updateShowForm(!showForm)} class="button">
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
