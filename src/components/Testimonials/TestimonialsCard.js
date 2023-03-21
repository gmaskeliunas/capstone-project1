import "./TestimonialsCard.css"

export default function TestimonialsCard(props) {
  return (
    <div className="app__testimonials-card">
      <p className="app__testimonials-card_rating">{props.rating}</p>
      <div className="app__testimonials-card_image-and-name">
        <img src={props.image} alt={props.name}/>
        <h2 className="app__testimonials-card_name">{props.name}</h2>
      </div>
      <p className="app__testimonials-card_review">{props.review}</p>
    </div>
  );
}