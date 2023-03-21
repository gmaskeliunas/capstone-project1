import restaurantchef from '../images/restaurant chef B.jpg';
import marioandadrian from '../images/Mario and Adrian A.jpg';
import "./About.css"

export default function About() {
  return (
    <div className="app__aboutsection app__wrapper section__padding">
      <div className="app__aboutsection_grid-container">
        <div className="app__aboutsection_left-column">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        <img src={restaurantchef} alt="Chef" className="app__aboutsection_grid-container_image-A"/>
        <img src={marioandadrian} alt="Chefs" className="app__aboutsection_grid-container_image-B"/>
      </div>
    </div>
  );
}