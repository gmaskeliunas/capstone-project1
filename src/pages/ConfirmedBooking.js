import greenCheck from "../components/images/Vector.svg"
import "./Booking.css"

export default function ConfirmedBooking() {
  return(
    <div className="app__confirmation-wrapper">
    <h1>Your booking has been submitted!</h1>
    <img src={greenCheck} alt="confirmed img" />
    </div>
  );
}