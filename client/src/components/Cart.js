import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { cartCheckout, cartItemsReceived } from "../actions/cartActions";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cartItems);

  useEffect(() => {
    const getCart = async () => {
      dispatch(cartItemsReceived());
    };
    getCart();
  }, [dispatch]);

  const handleCheckout = async (e) => {
    e.preventDefault();
    dispatch(cartCheckout());
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
