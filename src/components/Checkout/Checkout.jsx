import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../firebase/config";

const Checkout = () => {
  const { cart, totalItems, clear } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formulario, setFormulario] = useState({
    name: "",
    phone: "",
    email: user?.email || "",
  });

  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormulario((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (processing) return;

    if (!user) {
      navigate("/login");
      return;
    }

    if (cart.length === 0) {
      setError("Tu carrito está vacío.");
      return;
    }

    if (
      !formulario.name.trim() ||
      !formulario.phone.trim() ||
      !formulario.email.trim()
    ) {
      setError("Completá todos los campos para continuar.");
      return;
    }

    setError("");
    setProcessing(true);

    const total = cart.reduce(
      (acc, producto) =>
        acc + producto.price * producto.quantity,
      0
    );

    const order = {
      userId: user.uid,

      buyer: {
        name: formulario.name.trim(),
        phone: formulario.phone.trim(),
        email: formulario.email.trim(),
      },

      items: cart.map((producto) => ({
        id: producto.id,
        title: producto.name,
        quantity: producto.quantity,
        price: producto.price,
      })),

      date: serverTimestamp(),
      total,
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
    } finally {
      setProcessing(false);
    }
  };

  if (orderId) {
    return (
      <div>
        <h2>¡Compra realizada con éxito! 🎉</h2>

        <p>Tu pedido fue registrado correctamente.</p>

        <p>
          <strong>ID de orden:</strong> {orderId}
        </p>

        <button type="button" onClick={() => navigate("/")}>
          Volver al catálogo
        </button>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div>
        <h2>Tu carrito está vacío</h2>
        <p>Agregá productos antes de finalizar tu compra.</p>
        <Link to="/">Volver al catálogo</Link>
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
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formulario.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="phone">Teléfono</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formulario.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formulario.email}
            onChange={handleChange}
            required
          />
        </div>

        {error && <p role="alert">{error}</p>}

        <button type="submit" disabled={processing}>
          {processing ? "Procesando compra..." : "Confirmar compra"}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
