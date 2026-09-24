import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        setCart((prev) => {
            const existe = prev.find((producto) => producto.id === item.id);

            if (existe) {
                const nuevaCantidad = existe.quantity + quantity;

                return prev.map((producto) =>
                    producto.id === item.id
                        ? {
                            ...producto,
                            quantity: Math.min(nuevaCantidad, producto.stock),
                        }
                        : producto
                );
            }

            return [...prev, { ...item, quantity }];
        });
    };

    const removeItem = (itemId) => {
        setCart((prev) =>
            prev.filter((producto) => producto.id !== itemId)
        );
    };

    const decreaseItem = (itemId) => {
  setCart((prev) =>
    prev
      .map((producto) =>
        producto.id === itemId
          ? {
              ...producto,
              quantity: producto.quantity - 1,
            }
          : producto
      )
      .filter((producto) => producto.quantity > 0)
  );
};

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some((producto) => producto.id === id);
    };

    const totalItems = cart.reduce(
        (total, producto) => total + producto.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                decreaseItem,
                clear,
                isInCart,
                totalItems,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}