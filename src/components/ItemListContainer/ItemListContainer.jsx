import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { collection, getDocs, query, where } from "firebase/firestore";

import { db } from "../../firebase/config";

import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const productosRef = collection(db, "products");

        let consulta;

        if (id) {
          consulta = query(
            productosRef,
            where("category", "==", id)
          );
        } else {
          consulta = productosRef;
        }

        const resultado = await getDocs(consulta);

        const productos = resultado.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setItems(productos);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      }
    };

    cargarProductos();
  }, [id]);

  return (
    <main>
      <h2>{greeting}</h2>

      <ItemList items={items} />
    </main>
  );
};

export default ItemListContainer;