import { useState } from "react";
import "./Booking.css"

export default function BookingForm() {

  const [date, setDate] = useState("");
  const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
  const [guestNumber, setGuestNumber] = useState("");
  const [occasion, setOccasion] = useState("");

  const clearForm = () => {
    setDate("");
    // setAvailableTimes("");
    setGuestNumber("");
    setOccasion("")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservation made!");
    // clearForm();
  };

  return(
    <div className="app__reservations-container">
      <form className="app__reservations-form" onSubmit={handleSubmit}>
        <label className="app__reservation-label" htmlFor="res-date">Choose date</label>
        <input
          className="app__reservation-input"
          type="date"
          id="res-date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <label className="app__reservation-label" htmlFor="res-time">Choose time</label>
        <select
          className="app__reservation-input"
          id="res-time"
          value={availableTimes}
          onChange={e => setAvailableTimes(e.target.value)}
        >
          {availableTimes.map(time => (
          <option key={time}>{time}</option>
        ))}
            {/* <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option> */}
        </select>
        <label className="app__reservation-label" htmlFor="guests">Number of guests</label>
        <input
          className="app__reservation-input"
          type="number"
          placeholder="1"
          min="1" max="10"
          id="guests"
          value={guestNumber}
          onChange={e => setGuestNumber(e.target.value)}
        />
        <label className="app__reservation-label" htmlFor="occasion">Occasion</label>
        <select
          className="app__reservation-input"
          id="occasion"
          value={occasion}
          onChange={e => setOccasion(e.target.value)}
        >
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Other</option>
        </select>
        <input className="reservationInput" type="submit" value="Make Your reservation"/>
      </form>
    </div>
  );
}