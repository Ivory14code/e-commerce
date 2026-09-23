import { useState } from "react";

const ItemCount = ({ stock }) => {
  const [cantidad, setCantidad] = useState(0);

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div>
      <button onClick={decrementar}>-</button>

      <span>{cantidad}</span>

      <button onClick={incrementar}>+</button>
    </div>
  );
};

export default ItemCount;