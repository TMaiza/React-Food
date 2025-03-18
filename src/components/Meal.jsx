import Button from "./UI/Button";
import { currencyFormatter } from "../util/formatting";

export default function Meal({ id, name, price, description, image }) {
  const imageRoute = "http://localhost:3000/" + image;

  function addToCart() {
    console.log("click", id);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={imageRoute} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(price)}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={addToCart}>Add to cart</Button>
        </p>
      </article>
    </li>
  );
}
