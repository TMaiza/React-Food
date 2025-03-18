import { CartContext } from "../store/CartContext";
import { useContext } from "react";
import Modal from "./UI/Modal";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";

export default function Cart() {
  const { cartItems } = useContext(CartContext);
  const cartPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  return (
    <Modal open={true} className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            {item.name} - {item.quantity} * {item.price}
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartPrice)}</p>
      <p className="modal-actions">
        <Button textOnly>Close</Button>
        <Button>Go to checkout</Button>
      </p>
    </Modal>
  );
}
