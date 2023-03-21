import DishCard from '../DishCard/DishCard';
import greekSaladPic from "../images/greekSalad.jpg"
import bruschetta from "../images/bruschetta.svg"
import lemmonDessert from "../images/lemon dessert.jpg"
import "./Highlights.css"

export default function Highlights() {
  return (
    <div className="highlights-wrapper">
      <div className="highlights-flexbox">
        <h2>Specials</h2>
        <button>Online Menu</button>
      </div>
      <div className="grid-container-2">
        <DishCard
          image={greekSaladPic}
          name="Greek salad"
          description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
          price="$12.99"
        />
        <DishCard
          image={bruschetta}
          name="Bruschetta"
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
          price="$5.99"
        />
        <DishCard
          image={lemmonDessert}
          name="Lemon Dessert"
          description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
          price="$5.00"
        />
      </div>
    </div>
  );
}