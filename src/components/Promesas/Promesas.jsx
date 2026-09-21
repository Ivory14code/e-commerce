const products = [
  {
    id: 1,
    title: "Laptop",
    description: "Laptop de alto rendimiento.",
    price: 850000,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
  },
  {
    id: 2,
    title: "Teléfono",
    description: "Smartphone moderno.",
    price: 550000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  },
  {
    id: 3,
    title: "Auriculares",
    description: "Auriculares inalámbricos.",
    price: 120000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  },
  {
    id: 4,
    title: "Teclado",
    description: "Teclado mecánico para gaming.",
    price: 95000,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3"
  },
  {
    id: 5,
    title: "Mouse",
    description: "Mouse ergonómico de alta precisión.",
    price: 65000,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db"
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};