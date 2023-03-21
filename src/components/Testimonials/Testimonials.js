import TestimonialsCard from "./TestimonialsCard";
import avatar from "../images/avatar.jpg"
import "./Testimonials.css"

const review = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

export default function Testimonials() {
  return(
    <div className="app__testimonials">
      <h2 className="app__testimonials-header">Testimonials</h2>
      <div className="app__testimonials_grid-container">
        <TestimonialsCard
          name={"Garry"}
          image={avatar}
          review={review}
          rating="5/5⭐"
        />
        <TestimonialsCard
          name={"Barry"}
          image={avatar}
          review={review}
          rating="5/5⭐"
        />
        <TestimonialsCard
          name={"Jeff"}
          image={avatar}
          review={review}
          rating="5/5⭐"
        />
        <TestimonialsCard
          name={"Tom"}
          image={avatar}
          review={review}
          rating="5/5⭐"
        />
      </div>
    </div>
  );
}