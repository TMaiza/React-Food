import Button from "./UI/Button";
import { currencyFormatter } from "../util/formatting";
import { CartContext } from "../store/CartContext";
import { useContext } from "react";

export default function Meal({ id, name, price, description, image }) {
  const {addItemToCart} = useContext(CartContext)
  const imageRoute = "http://localhost:3000/" + image;

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
          <Button onClick={()=>addItemToCart({id, name, price})}>Add to cart</Button>
        </p>
      </article>
    </li>
  );
}
