import "./Item.css";

function Item({ product }) {
  return (
    <div className="item-card">
      <img src={product.image} alt={product.title} />

      <h3>{product.title}</h3>

      <p>{product.description}</p>

      <p>${product.price}</p>
    </div>
  );
}

export default Item;