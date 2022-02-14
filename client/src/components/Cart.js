import { useContext, useEffect } from "react";
import {
  getCartItems,
  CartContext,
  checkoutCart,
} from "../context/cart-context";

const Cart = () => {
  const { cartItems, dispatch } = useContext(CartContext);
  useEffect(() => {
    getCartItems(dispatch);
  }, [dispatch]);

  const handleCheckout = (e) => {
    e.preventDefault();
    checkoutCart(dispatch);
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
        <a href="/#" className="button checkout disabled">
          Checkout
        </a>
      </div>
    );
  } else {
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        <table className="cart-items">
          <tbody>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
            {cartItems.map((item) => (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
              </tr>
            ))}

            <tr>
              <td colSpan="3" className="total">
                Total: $
                {cartItems
                  .reduce((acc, item) => (acc += item.price * item.quantity), 0)
                  .toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
        <a onClick={handleCheckout} href="/#" className="button checkout">
          Checkout
        </a>
      </div>
    );
  }
};

export default Cart;
