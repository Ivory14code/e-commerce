import { useEffect, useState } from "react";
import { getUnProducto } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getUnProducto(1)
      .then((producto) => {
        setProducto(producto);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!producto) {
    return <p>Cargando...</p>;
  }

  return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;