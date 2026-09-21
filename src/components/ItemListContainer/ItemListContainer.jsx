import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../Promesas/Promesas";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const cargarProductos = async () => {
      const productos = await getProducts();
      setItems(productos);
    };

    cargarProductos();
  }, []);

  return (
    <main>
      <h2>{greeting}</h2>

      <ItemList items={items} />
    </main>
  );
};

export default ItemListContainer;