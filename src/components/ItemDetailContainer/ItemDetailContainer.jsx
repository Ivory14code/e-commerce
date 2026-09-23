import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUnProducto } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    setProducto(null);

    getUnProducto(Number(id))
      .then((producto) => {
        setProducto(producto);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!producto) {
    return <p>Cargando...</p>;
  }

  return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;