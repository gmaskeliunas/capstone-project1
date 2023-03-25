import restaurantfood from '../images/restaurantfood.jpg';
import { Link } from 'react-router-dom';
import "./HeroSection.css"

export default function HeroSection() {
  return (
    <div className="app__herosection app__wrapper section__padding" id="home">
      <div className="app__herosection_grid-container">
        <div className="app__herosection_left-column">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <div className="app__herosection_button">
            <button role="button"><Link to="/capstone-project1/reservations">Reserve a table</Link></button>
          </div>
        </div>
        <img src={restaurantfood} alt="Food"/>
      </div>
    </div>
  );
}