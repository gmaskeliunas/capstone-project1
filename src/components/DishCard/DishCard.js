import "./DishCard.css"
import { RiEBike2Fill } from 'react-icons/ri';

export default function DishCard(props) {
  return (
    <div className="app__dish-card">
      <img src={props.image} alt={props.name} />
      <div className="app__dish-card_name-price">
        <h3 className="app__dish-card_name">{props.name}</h3>
        <p className="app__dish-card_price">{props.price}</p>
      </div>
      <p className="app__dish-card_description">{props.description}</p>
      <button>Order a delivery <RiEBike2Fill /></button>
    </div>
  );
}
