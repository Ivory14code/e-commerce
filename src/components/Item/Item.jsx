import { Link } from "react-router-dom";

import "./Item.css";

function Item({ product }) {
  return (
    <div className="item-card">
      <Link to={`/item/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
      </Link>

      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}

export default Item;