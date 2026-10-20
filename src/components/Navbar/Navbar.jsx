import { NavLink } from "react-router-dom";
import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, loading, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      alert("No se pudo cerrar la sesión. Intentá nuevamente.");
    }
  };

  return (
    <nav className="navbar">
      <h1>Mi E-Commerce</h1>

      <div className="menu">
        <NavLink to="/">Home</NavLink>

        <div className="categorias">
          <NavLink to="/category/Tecnología">Tecnología</NavLink>
          <NavLink to="/category/Periféricos">Periféricos</NavLink>
          <NavLink to="/category/Audio">Audio</NavLink>
        </div>

        <NavLink to="/contacto">Contacto</NavLink>
      </div>

      <div className="navbar-user">
        {!loading && (
          user ? (
            <>
              <span className="user-email">{user.email}</span>
              <button
                type="button"
                className="logout-button"
                onClick={handleLogout}
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <div className="auth-links">
              <NavLink to="/login">Iniciar sesión</NavLink>
              <NavLink to="/registro">Registrarse</NavLink>
            </div>
          )
        )}
      </div>

      <NavLink to="/cart" className="cart-link">
        <CartWidget />
      </NavLink>
    </nav>
  );
};

export default Navbar;
