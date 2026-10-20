import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    setLoading(true);

    try {
      await register(email.trim(), password);
      navigate("/checkout", { replace: true });
    } catch (err) {
      switch (err.code) {
        case "auth/email-already-in-use":
          setError("Ya existe una cuenta registrada con ese email.");
          break;
        case "auth/invalid-email":
          setError("Ingresá un email válido.");
          break;
        case "auth/weak-password":
          setError("La contraseña es demasiado débil.");
          break;
        default:
          setError("No se pudo crear la cuenta. Intentá nuevamente.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-container">
      <h2>Crear cuenta</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="register-email">Email</label>
          <input
            id="register-email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="register-password">Contraseña</label>
          <input
            id="register-password"
            type="password"
            autoComplete="new-password"
            minLength={6}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>

        {error && <p role="alert">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Creando cuenta..." : "Registrarme"}
        </button>
      </form>

      <p>
        ¿Ya tenés cuenta? <Link to="/login">Iniciá sesión</Link>
      </p>
    </section>
  );
};

export default Register;
