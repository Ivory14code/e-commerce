import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../context/CartContext";

import "./ItemDetail.css";

const ItemDetail = ({ producto }) => {
  const { addItem } = useCart();

  const handleAdd = (cantidad) => {
    addItem(producto, cantidad);
  };

  return (
    <div className="item-detail">
      <div className="item-detail-image">
        <img src={producto.img} alt={producto.name} />
      </div>

      <div className="item-detail-info">
        <h2>{producto.name}</h2>

        <p className="item-detail-category">
          Categoría: {producto.category}
        </p>

        <p className="item-detail-description">
          {producto.description}
        </p>

        <p className="item-detail-price">
          Precio: ${producto.price}
        </p>

        <p className="item-detail-stock">
          Stock disponible: {producto.stock}
        </p>

        <ItemCount
          stock={producto.stock}
          onAdd={handleAdd}
        />
      </div>
    </div>
  );
};

export default ItemDetail;