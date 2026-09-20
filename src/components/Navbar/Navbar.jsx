import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Mi E-Commerce</h1>

      <div className="menu">
        <a href="#">Home</a>

        <div className="categorias">
          <a href="#">Notebooks</a>
          <a href="#">Celulares</a>
          <a href="#">Periféricos</a>
          <a href="#">Componentes</a>
        </div>

        <a href="#">Contacto</a>
      </div>

      <CartWidget />
    </nav>
  );
};

export default Navbar;