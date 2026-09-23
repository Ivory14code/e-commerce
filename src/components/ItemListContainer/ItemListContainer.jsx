import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../asyncmock";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const cargarProductos = async () => {
      const productos = await getProducts();

      if (id) {
        const productosFiltrados = productos.filter(
          (producto) =>
            producto.category.toLowerCase() === id.toLowerCase()
        );

        setItems(productosFiltrados);
      } else {
        setItems(productos);
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
