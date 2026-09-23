import "./Item.css";

function Item({ product }) {
  return (
    <div className="item-card">
      <img src={product.img} alt={product.name} />

      <h3>{product.name}</h3>

      <p>{product.description}</p>

      <p>${product.price}</p>
    </div>
  );
}

export default Item;