import restaurantfood from '../images/restaurantfood.jpg';
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
            <button>Reserve a table</button>
          </div>
        </div>
        <img src={restaurantfood} alt="Food"/>
      </div>
    </div>
  );
}