import { Link } from "react-router-dom";

import { useCart } from "../../context/CartContext";

import "./Cart.css";

const Cart = () => {
  const { cart, removeItem, decreaseItem, clear } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Tu carrito está vacío 🛒</h2>
        <p>Agregá algunos productos para comenzar tu compra.</p>

        <Link to="/" className="cart-back">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  const total = cart.reduce(
    (acc, producto) => acc + producto.price * producto.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Mi carrito 🛒</h2>

      <div className="cart-items">
        {cart.map((producto) => (
          <div className="cart-item" key={producto.id}>
            <img
              src={producto.image}
              alt={producto.name}
              className="cart-item-image"
            />

            <div className="cart-item-info">
              <h3>{producto.name}</h3>

              <div className="cart-quantity">
                <button onClick={() => decreaseItem(producto.id)}>
                  -
                </button>

                <span>{producto.quantity}</span>
              </div>

              <p>Precio unitario: ${producto.price}</p>

              <p className="cart-subtotal">
                Subtotal: ${producto.price * producto.quantity}
              </p>
            </div>

            <button
              className="cart-remove"
              onClick={() => removeItem(producto.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total: ${total}</h3>

        <div className="cart-actions">
          <button className="cart-clear" onClick={clear}>
            Vaciar carrito
          </button>

          <Link to="/checkout" className="cart-finish">
            Finalizar compra
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;