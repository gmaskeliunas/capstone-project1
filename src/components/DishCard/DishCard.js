import "./DishCard.css"
import { RiEBike2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function DishCard(props) {
  return (
    <div className="app__dish-card">
      <img src={props.image} alt={props.name} />
      <div className="app__dish-card_name-price">
        <h3 className="app__dish-card_name">{props.name}</h3>
        <p className="app__dish-card_price">{props.price}</p>
      </div>
      <p className="app__dish-card_description">{props.description}</p>
      <button role="button"><Link to="/capstone-project1/order-online">Order a delivery <RiEBike2Fill /></Link></button>
    </div>
  );
}
