import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { useCart } from "../../context/CartContext";

import { db } from "../../firebase/config";

const Checkout = () => {
  const { cart, totalItems, clear } = useCart();

  const navigate = useNavigate();

  const [formulario, setFormulario] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !formulario.name.trim() ||
      !formulario.phone.trim() ||
      !formulario.email.trim()
    ) {
      setError("Completá todos los campos para continuar.");
      return;
    }

    setError("");

    const total = cart.reduce(
      (acc, producto) => acc + producto.price * producto.quantity,
      0
    );

    const order = {
      buyer: {
        name: formulario.name,
        phone: formulario.phone,
        email: formulario.email,
      },

      items: cart.map((producto) => ({
        id: producto.id,
        title: producto.name,
        quantity: producto.quantity,
        price: producto.price,
      })),

      date: serverTimestamp(),
      total: total,
    };

    try {
      const ordersCollection = collection(db, "orders");

      const resultado = await addDoc(ordersCollection, order);

      clear();

      setOrderId(resultado.id);
    } catch (error) {
      console.error("Error al generar la orden:", error);

      setError(
        "Ocurrió un error al generar la orden. Intentá nuevamente."
      );
    }
  };

  if (orderId) {
    return (
      <div>
        <h2>¡Compra realizada con éxito! 🎉</h2>

        <p>
          Tu pedido fue registrado correctamente.
        </p>

        <p>
          <strong>ID de orden:</strong> {orderId}
        </p>

        <button onClick={() => navigate("/")}>
          Volver al catálogo
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>Finalizar compra</h2>

      <p>Productos en el carrito: {totalItems}</p>

      <h3>Datos del comprador</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>

          <input
            type="text"
            name="name"
            value={formulario.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Teléfono</label>

          <input
            type="tel"
            name="phone"
            value={formulario.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={formulario.email}
            onChange={handleChange}
          />
        </div>

        {error && <p>{error}</p>}

        <button type="submit">
          Confirmar compra
        </button>
      </form>
    </div>
  );
};

export default Checkout;