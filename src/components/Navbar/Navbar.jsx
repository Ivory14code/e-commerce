import { NavLink } from "react-router-dom";

import "./Navbar.css";

import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
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

      <CartWidget />
    </nav>
  );
};

export default Navbar;
