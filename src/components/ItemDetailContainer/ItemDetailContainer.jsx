import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { doc, getDoc } from "firebase/firestore";

import { db } from "../../firebase/config";

import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const cargarProducto = async () => {
      try {
        setProducto(null);

        const productoRef = doc(db, "products", id);
        const resultado = await getDoc(productoRef);

        if (resultado.exists()) {
          setProducto({
            id: resultado.id,
            ...resultado.data(),
          });
        } else {
          console.error("Producto no encontrado");
        }
      } catch (error) {
        console.error("Error al cargar el producto:", error);
      }
    };

    cargarProducto();
  }, [id]);

  if (!producto) {
    return <p>Cargando...</p>;
  }

  return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;