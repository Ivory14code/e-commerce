const products = [
  {
    id: 1,
    name: "Laptop",
    description: "Laptop de alto rendimiento.",
    price: 850000,
    category: "Tecnología",
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    stock: 10
  },
  {
    id: 2,
    name: "Teléfono",
    description: "Smartphone moderno.",
    price: 550000,
    category: "Tecnología",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    stock: 15
  },
  {
    id: 3,
    name: "Auriculares",
    description: "Auriculares inalámbricos.",
    price: 120000,
    category: "Audio",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    stock: 20
  },
  {
    id: 4,
    name: "Teclado",
    description: "Teclado mecánico para gaming.",
    price: 95000,
    category: "Periféricos",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    stock: 8
  },
  {
    id: 5,
    name: "Mouse",
    description: "Mouse ergonómico de alta precisión.",
    price: 65000,
    category: "Periféricos",
    img: "https://images.unsplash.com/photo-1527814050087-3793815479db",
    stock: 12
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getUnProducto = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const producto = products.find((item) => item.id === id);

      if (producto) {
        resolve(producto);
      } else {
        reject(new Error("Producto no encontrado"));
      }
    }, 2000);
  });
};