import { useCart } from "../../context/CartContext";

const CartWidget = () => {
  const { totalItems } = useCart();

  return (
    <div className="cart-widget">
      🛒 <span>{totalItems}</span>
    </div>
  );
};

export default CartWidget;